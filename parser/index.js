

var HTMLParser = require('node-html-parser');

const https = require('https');
const url = 'https://vanisource.org/wiki/SB_9.19_Summary';

var cred = require("./cred.js")
const DB = require("./db.js")

cred.mysql.connectionLimit = 100
cred.mysql.multipleStatements = true

var mysql = require('mysql');
var db = new DB(mysql.createPool(cred.mysql))

String.prototype.escape = function(){
  return this.replaceAll("\n","\\n").replaceAll('"','\\"')
}

function getHtml(url) {
    return new Promise(function(resolve, reject) {
        https.get(url, (res) => {
            let data = ''
            res.on('data', (chunk) => {
                data += chunk
            })
            res.on('end', () => {
                resolve(data)
            })
            }).on('error', (err) => {
            reject(err)
            });
    });
}

function parseHtml(data) {
  const root = HTMLParser.parse(data)

  const name = root.querySelector("#firstHeading").textContent.trim()
  const book = name.split(" ")[0]
  const parts = name.split(" ")[1].split(".")
  var canto = null
  var chapter = null
  var texts = []
  var text = ""
  var group = false
  var isSummary = false
  if(name.includes("Summary")){
    canto = parts[0]
    chapter = parts[1].split(" ")[0]
    texts = ["Summary"]
    isSummary = true
  }else{
    if(parts.length==3){
      canto = parts[0]
      chapter = parts[1]
      text = parts[2]
    }else if (parts.length==2){
      chapter = parts[0]
      text = parts[1]
    }
    texts = (()=>{
      const hasAlpha = /[a-zA-Z]/.test(text)
      const alpha = hasAlpha?text.match(/[a-zA-Z]+/g)[0]:""
      const parts = text.split("-")
      if(parts.length==1){
        return parts
      }

      var texts = []
      for (var i = parseInt(parts[0].replaceAll(alpha,"")); i <= parseInt(parts[1].replaceAll(alpha,"")); i++) {
          texts.push(i+alpha)
      }
      return texts
    })()
  }

  var versesNode = (()=>{
    var x = root.querySelector(".verse")
    if(!!x){
      return x.getElementsByTagName("dl")
    }
    return []
    
  })()
  const verses = isSummary?[""]:versesNode.map(n=>{return Buffer.from(n.textContent.trim()).toString('base64')})
  const proseFlags = verses.map((v)=>{return v.split("\n").length<4})
  group = verses.length>1

  const synonyms = (()=>{
    var x = root.querySelector(".synonyms")
    if(!!x){
      return Buffer.from(x.textContent.trim()).toString('base64')
    }
    return isSummary?"":null
  })()

  const translation = (()=>{
    var x = root.querySelector(".translation")
    if(!!x){
      return Buffer.from(x.textContent.trim()).toString('base64')
    }
    return isSummary?"":null
  })()

  const purport = (()=>{
    var purport = []
    var paragraphs = root.querySelector(".purport")
    if(!!paragraphs){
      for(var i=0; i<paragraphs.childNodes.length; i++){
        if(!paragraphs.childNodes[i].textContent.trim()){
          continue
        }
        purport.push({
          text: paragraphs.childNodes[i].textContent.trim()
        })
        if(paragraphs.childNodes[i].rawTagName=="dl"){
          purport[purport.length-1].isRef=true
        }
      }
      return Buffer.from(JSON.stringify(purport)).toString('base64')
    }
    return null
  })()

  const links = (()=>{
    var x = root.querySelector(".mw-parser-output").getElementsByTagName("a")
    return [x[x.length-1], x[x.length-3]]
  })()

  const next = links[0].getAttribute("title")
  const prev = links[1].getAttribute("title")

  const nextLink = links[0].getAttribute("href")
  const prevLink = links[1].getAttribute("href")

  const chapterName = (()=>{
    var x = root.querySelector(".mw-parser-output").getElementsByTagName("b")[0].getElementsByTagName("a")
    return x[x.length-1].textContent.split(":")[1].trim()
  })()

  const parsedContent =  {name, book, canto, chapter, texts, verses, proseFlags, group, synonyms, translation ,purport, next, prev, nextLink, prevLink, chapterName}
  if(!isSummary && (verses.length!=texts.length)){
    throw new Error("Mismatch len:", parsedContent.name)
  }
  return parsedContent
}

getHtml(url)
  .then((data)=>{
    var parsedContent = parseHtml(data)
    parsedContent.verses.map((v, i)=>{
      var query = `INSERT ignore INTO texts
      (
      \`name\`,
      \`book\`,
      \`canto\`,
      \`chapter\`,
      \`text\`,
      \`verse\`,
      \`synonyms\`,
      \`translation\`,
      \`purport\`,
      \`next\`,
      \`prev\`,
      \`nextLink\`,
      \`prevLink\`,
      \`isProse\`,
      \`isGroup\`
      )
      VALUES
      (
      "${parsedContent.name}",
      "${parsedContent.book}",
      "${parsedContent.canto}",
      "${parsedContent.chapter}",
      "${parsedContent.texts[i]}",
      "${v}",
      "${parsedContent.synonyms}",
      "${parsedContent.translation}",
      "${parsedContent.purport}",
      "${parsedContent.next}",
      "${parsedContent.prev}",
      "${parsedContent.nextLink}",
      "${parsedContent.prevLink}",
      ${!!parsedContent.proseFlags[i]},
      ${!!parsedContent.group[i]}
      );
      `
      db.execQuery(query).then((err, res)=>{
        console.log(err, res)
      }).catch((err)=>{
        console.log(err)
      })
    })


  })
  .catch(function(err) {
    console.log(err)
  });
    


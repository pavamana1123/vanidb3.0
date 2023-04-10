var HTMLParser = require('node-html-parser');

const https = require('https');

var cred = require("./cred.js")
const DB = require("./db.js")

cred.mysql.connectionLimit = 100
cred.mysql.multipleStatements = true

var mysql = require('mysql');
var db = new DB(mysql.createPool(cred.mysql))

const books = {
  sb: {
    startLink: "https://vanisource.org/wiki/SB_12.13.23",
    endLink: "https://vanisource.org/wiki/SB_1.1.1"
  }
}

var book = "sb"
var url = books[book].startLink
var overwrite = true

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

  return new Promise(function(resolve, reject) {
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
        group = true
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
    const proseFlags = versesNode.map((n)=>{return n.textContent.trim().split("\n").length<4})
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

    var next = links[0].getAttribute("title")
    var prev = links[1].getAttribute("title")

    var nextLink = links[0].getAttribute("href")
    var prevLink = links[1].getAttribute("href")

    if(url==books[book].startLink){
      next=null
      nextLink=null
    }
    if(url==books[book].endLink){
      prev=null
      prevLink=null
    }

    const chapterName = (()=>{
      var x = root.querySelector(".mw-parser-output").getElementsByTagName("b")[0].getElementsByTagName("a")
      return x[x.length-1].textContent.split(":")[1].trim()
    })()

    const parsedContent =  {name, book, canto, chapter, texts, verses, proseFlags, group, synonyms, translation ,purport, next, prev, nextLink, prevLink, chapterName, isSummary}
    if(!isSummary && (verses.length!=texts.length)){
      throw new Error("Mismatch len:", parsedContent.name)
    }
    resolve(parsedContent)
  });
}

function log(l){
  console.log(`  ${parsedContent.name}> ${l}`)
}

var parsedContent
var start = true

function storeVerse(){
  getHtml(url)
  .then(parseHtml)
  .then((parsedContent)=>{
    parsedContent = parseHtml(data)
    log("parsed html")
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
      \`isGroup\`,
      \`ord\`,
      \`isSummary\`
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
      ${!!parsedContent.group},
      ${Date.now()},
      ${!!parsedContent.isSummary}
      )
      
      ${overwrite?`
      ON DUPLICATE KEY UPDATE
      name="${parsedContent.name}",
      book="${parsedContent.book}",
      canto="${parsedContent.canto}",
      chapter="${parsedContent.chapter}",
      text="${parsedContent.texts[i]}",
      verse="${v}",
      synonyms="${parsedContent.synonyms}",
      translation="${parsedContent.translation}",
      purport="${parsedContent.purport}",
      next="${parsedContent.next}",
      prev="${parsedContent.prev}",
      nextLink="${parsedContent.nextLink}",
      prevLink="${parsedContent.prevLink}",
      isProse=${!!parsedContent.proseFlags[i]},
      isGroup=${!!parsedContent.group},
      ord=${Date.now()},
      isSummary=${!!parsedContent.isSummary}
      `:""}
      ;
      `
      log("writing data")
      db.execQuery(query).then((res, err)=>{
        if(err){
          console.log(err)
          log(`database error ${err}`)
        }else{
          url = `https://vanisource.org${start?parsedContent.nextLink:parsedContent.prevLink}`
          start=false
          log("written to database")
          storeVerse()
        }
      }).catch((err)=>{
        console.log(err)
      })
    })
  })
  .then
  .catch(function(err) {
    console.log(url, parsedContent.prevLink, parsedContent.nextLink)
    log(err)
  });
}

storeVerse()





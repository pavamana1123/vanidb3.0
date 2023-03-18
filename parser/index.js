

var HTMLParser = require('node-html-parser');

const https = require('https');
const url = 'https://vanisource.org/wiki/SB_5.18.8';

var cred = require("./cred.js")
const DB = require("./db.js")

cred.mysql.connectionLimit = 100
cred.mysql.multipleStatements = true

var mysql = require('mysql');
var db = new DB(mysql.createPool(cred.mysql))

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
  if(name.includes("Summary")){
    canto = parts[0]
    chapter = parts[1].split(" ")[0]
    texts = ["0"]
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
      const alpha = text.match(/[a-zA-Z]+/g)[0]
      const parts = text.split("-")
      if(parts.length==1){
        return parts
      }

      var texts = []
      for (var i = parseInt(parts[0].replaceAll(alpha,"")); i <= parseInt(parts[1].replaceAll(alpha,"")); i++) {
          texts.push(i+hasAlpha?alpha:"")
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
  const verses = versesNode.map(n=>{return n.textContent.trim()})
  const proseFlags = verses.map((v)=>{return v.split("\n").length<4})
  group = verses.length>1

  const synonyms = (()=>{
    var x = root.querySelector(".synonyms")
    if(!!x){
      return x.textContent.trim()
    }
    return null
  })()

  const purport = (()=>{
    var x = root.querySelector(".purport")
    if(!!x){
      return x.textContent.trim()
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
    return x[2].textContent.split(":")[1].trim()
  })()

  return {name, book, canto, chapter, texts, verses, proseFlags, group, synonyms, purport, next, prev, nextLink, prevLink, chapterName}
}

getHtml(url)
  .then((data)=>{
    var content = parseHtml(data)
    content.verses.map((v, i)=>{
      
      var query = `INSERT INTO texts
      (name,
      book,
      canto,
      chapter,
      text,
      verse,
      synonyms,
      translation,
      purport,
      next,
      prev,
      nextLink,
      prevLink)
      VALUES
      ("${verse.name.replaceAll('"','\\"')}",
      "${verse.book.replaceAll('"','\\"')}",
      "${verse.canto.replaceAll('"','\\"')}",
      "${verse.chapter.replaceAll('"','\\"')}",
      "${verse.text.replaceAll('"','\\"')}",
      "${verse.verse.replaceAll('"','\\"')}",
      "${verse.synonyms.replaceAll('"','\\"')}",
      "${verse.translation.replaceAll('"','\\"')}",
      "${verse.purport.replaceAll('"','\\"')}",
      "${verse.next.replaceAll('"','\\"')}",
      "${verse.prev.replaceAll('"','\\"')}",
      "${verse.nextLink.replaceAll('"','\\"')}",
      "${verse.prevLink.replaceAll('"','\\"')}"
      ;
      `
      console.log(query)
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
    


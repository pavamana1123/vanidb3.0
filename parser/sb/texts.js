var HTMLParser = require('node-html-parser');
const fs = require('fs');
var corrections = require("./tests/corrections.js")


const https = require('https');

var cred = require("../cred.js")
const DB = require("../db.js")

cred.mysql.connectionLimit = 100
cred.mysql.multipleStatements = true

var mysql = require('mysql');
var db = new DB(mysql.createPool(cred.mysql))

const startLink = "https://vanisource.org/wiki/SB_12.13.23"
const endLink =  "https://vanisource.org/wiki/SB_1.1.1"

var nurl

try{
  var [url, purl] = JSON.parse(fs.readFileSync('save.json', 'utf8').trim())
}catch(err){
  var [url, purl] = [startLink, endLink]
}

var overwrite = true

function getTexts(t){
  var p = t.split(".")
  return p[p.length-1].split("-")
}

function url2link(u){
  return u.replace("https://vanisource.org","")
}

function url2name(u){
  return u.replace("https://vanisource.org/wiki/","").replace("SB_","SB ").replaceAll("_",".")
}

function link2name(l){
  return !!l?l.replace("/wiki/","").replace("SB_","SB ").replaceAll("_","."):null
}

function link2url(l){
  return `https://vanisource.org${l}`
}

function getHtml(u) {
    return new Promise(function(resolve, reject) {
        https.get(u, (res) => {
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

function parseHtml(htmlContent) {
  return new Promise(function(resolve, reject) {
    const root = HTMLParser.parse(htmlContent)

    var name = url2name(url)
    const book = name.split(" ")[0]
    const parts = name.split(" ")[1].split(".")
    var canto = null
    var chapter = null
    var texts = []
    var text = ""
    var isGroup = false
    var isSummary = false
    if(name.endsWith("Summary")){
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
        isGroup = true
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

    const verses = isSummary?[""]:(corrections.verses[url] || versesNode.map(n=>{return n.textContent.trim()})).map(n=>{return Buffer.from(n).toString('base64')})
    isGroup = verses.length>1

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
      var x = root.querySelector(".mw-parser-output").getElementsByTagName("a").filter(a=>{
        return a.childNodes && a.childNodes[0] && a.childNodes[0].rawTagName=="img"
      })

      return [x[1], x[0]]
    })()

    var nextLink = (corrections.links[url] && corrections.links[url].nextLink) || links[0].getAttribute("href")
    var prevLink = (corrections.links[url] && corrections.links[url].prevLink) || links[1].getAttribute("href")

    // fix edge cases
    switch(url){
      case startLink:
        nextLink=null
        break
      case endLink:
        prevLink=null
        break
    }

    // fix summary non-symmetry 
    if(save.pdata && save.pdata.url.endsWith("Summary")){
      nextLink=url2link(save.pdata.url)
    }

    nurl = link2url(prevLink)

    resolve(
      {
        name,
        book,
        canto,
        chapter,
        texts,
        verses,
        synonyms,
        translation,
        purport,
        nextLink,
        prevLink,
        isGroup,
        isSummary
      }
    )
  });
}

function save(parsedContent){
  return db.execQuery(parsedContent.verses.map((v, i)=>{
    return `INSERT ignore INTO texts
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
    "${link2name(parsedContent.nextLink)}",
    "${link2name(parsedContent.prevLink)}",
    ${!!parsedContent.isGroup},
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
    next="${link2name(parsedContent.nextLink)}",
    prev="${link2name(parsedContent.prevLink)}",
    isGroup=${!!parsedContent.isGroup},
    ord=${Date.now()},
    isSummary=${!!parsedContent.isSummary}
    `:""}
    ;
    `
  }).join(""))
}

function log(l){
  console.log(`${new Date()} <${url}> ${l}`)
}

function vani(u) {
  getHtml(u)
  .then(parseHtml)
  .then(save)
  .then((res, err)=>{
    if(err){
      throw err
    }
    log('saved')
    fs.writeFileSync('save.json', JSON.stringify([url, purl], null, 2));
    purl = url
    url = nurl
    if(purl!=endLink){
      vani(url)
    }
  })
  .catch(err => {
    process.stdout.write('\x07');
    console.log(err)
    log(err)
  });  
}

vani(url)








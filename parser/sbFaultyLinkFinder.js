var HTMLParser = require('node-html-parser');
const fs = require('fs');

const https = require('https');

const startLink = "https://vanisource.org/wiki/SB_12.13.23"
const endLink =  "https://vanisource.org/wiki/SB_1.1.1"

var saveData = fs.readFileSync('sbFaultyLinksSave.json', 'utf8').trim()
var url, purl = null

var faultData = fs.readFileSync('sbFaultyLinksSave.json', 'utf8').trim()
var faultMap = {}

try{
  var saveParseData = JSON.parse(saveData)
  url = saveParseData.url
  purl = saveParseData.purl
}catch{
  url = startLink
}

try{
  faultMap = JSON.parse(faultData)
}catch{
  url = startLink
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
    if(name.endsWith("Summary")){
      name = name.replace(" Summary",".Summary")
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

    switch(url){
      case startLink:
        prev=next
        next=null
        prevLink=nextLink
        nextLink=null
        break;
      case endLink:
        prev=null
        prevLink=null
        break;
      case 'https://vanisource.org/wiki/SB_11.17.50':
        prev='SB 11.17.49'
        prevLink='/wiki/SB_11.17.49'
        next='SB 11.17.51'
        nextLink='/wiki/SB_11.17.51'
        break;
      case 'https://vanisource.org/wiki/SB_12.9.19':
        prev='SB 12.9.17-18'
        prevLink='/wiki/SB_12.9.17-18'
        break;
      case 'https://vanisource.org/wiki/SB_12.3.41':
        prev='SB 12.3.39-40'
        prevLink='/wiki/SB_12.3.39-40'
        break;
      case 'https://vanisource.org/wiki/SB_12.2.29':
        prev='SB 12.2.27-28'
        prevLink='/wiki/SB_12.2.27-28'
    }

    if(purl.endsWith("Summary") && nextLink.endsWith(".1")){
      next=purl.split("/")[purl.split("/").length-1].replaceAll("_",".")
      nextLink=purl.replace("https://vanisource.org","")
    }

    if(purl!==null && (!nextLink.trim().endsWith(".1") && !purl.trim().endsWith("_Summary")) && `https://vanisource.org${nextLink}`!==purl){
      faultMap[purl]=nextLink
    }

    const chapterName = (()=>{
      var x = root.querySelector(".mw-parser-output").getElementsByTagName("b")[0].getElementsByTagName("a")
      return x[x.length-1].textContent.split(":")[1].trim()
    })()

    const parsedContent =  {name, book, canto, chapter, texts, verses, proseFlags, group, synonyms, translation ,purport, next, prev, nextLink, prevLink, chapterName, isSummary}
    if(!isSummary && (verses.length!=texts.length)){
      reject(`Mismatch len: ${parsedContent.name}`)
    }
    parsedData = parsedContent
    resolve(parsedContent)
  });
}

function updateNextUrl(res, err){
  log("save to db")
  return new Promise(function(resolve, reject) {
    if(err){
      reject(err)
    }else{
      try {
        fs.writeFileSync('sbFaultyLinksSave.json', JSON.stringify({url, purl}));
      } catch (err) {
        reject(err)
      }
      purl = url
      url = `https://vanisource.org${parsedData.prevLink}`
      resolve()
    }
  })
}

function log(l){
  console.log(`  ${parsedData.name}> ${l}`)
}

var parsedData

function parseIt() {
  getHtml(url)
  .then(parseHtml)
  .then(updateNextUrl)
  .then(()=>{
    console.log(new Date(), `processing next url: ${url}`)
    if(purl!=endLink){
      parseIt()
    }
  })
  .catch(function(err) {
    process.stdout.write('\x07');
    console.log(err)
    log(err)
  });  
}

parseIt()








var HTMLParser = require('node-html-parser');
const fs = require('fs');

const https = require('https');
const { url } = require('inspector');

var save

try{
  var x = fs.readFileSync('save.json', 'utf8').trim()
  save = JSON.parse(x)
}catch(err){
  throw err
}

var urls = Object.keys(save.mismatch)
var index = 0
var v = {}

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
  return l.replace("/wiki/").replace("SB_","SB ").replaceAll("_",".")
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

function parseHtml(htmlData) {

  return new Promise(function(resolve, reject) {
    const root = HTMLParser.parse(htmlData)

    console.log("processing ", urls[index])

    var name = url2name(urls[index])
    const book = name.split(" ")[0]
    const parts = name.split(" ")[1].split(".")
    var canto = null
    var chapter = null
    var texts = []
    var text = ""
    var group = false
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
    const verses = isSummary?[""]:versesNode.map(n=>{return n.textContent.trim()})
    resolve(verses)
  });
}

function moveNext(verses){
  return new Promise(function(resolve, reject) {
    v[urls[index]]=verses
    index++
    if(index==urls.length){
      try {
        fs.writeFileSync('mis.json', JSON.stringify(v, null, 2));
      } catch (err) {
        reject(err)
      }
    }else{
      getMisVerses()
    }
    resolve()
  })
}

function getMisVerses() {
  getHtml(urls[index])
  .then(parseHtml)
  .then(moveNext)
  .catch(function(err) {
    process.stdout.write('\x07');
    console.log(err)
  });  
}

getMisVerses()








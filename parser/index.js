var HTMLParser = require('node-html-parser');

const https = require('https');
const url = 'https://vanisource.org/wiki/SB_9.18_Summary';

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

getHtml(url)
  .then(function(data) {
    const root = HTMLParser.parse(data)

    const name = root.querySelector("#firstHeading").textContent.trim()
    const book = name.split(" ")[0]
    const parts = name.split(" ")[1].split(".")
    var canto = null
    var chapter = null
    var text = null
    if(name.includes("Summary")){
      canto = parts[0]
      chapter = parts[1].split(" ")[0]
      text = "0"
    }else{
      if(parts.length==3){
        canto = parts[0]
        chapter = parts[1]
        text = parts[2]
      }else if (parts.length==2){
        chapter = parts[0]
        text = parts[1]
      }
    }

    const verseCount = (()=>{
      const x = text.split("-")
      if(x.length==1){
        return 1
      }
      return parseInt(x[1].replace(/\D/g,''))-parseInt(x[0].replace(/\D/g,''))+1
    })()

    var versesNode = (()=>{
      var x = root.querySelector(".verse")
      if(!!x){
        return x.getElementsByTagName("dl")
      }
      return []
      
    })()
    const verses = versesNode.map(n=>{return n.textContent.trim()})
    const proseFlags = verses.map((v)=>{return v.split("\n").length>5})

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

    console.log(name, book, canto, chapter, text, verses, synonyms, purport, next, prev, nextLink, prevLink, chapterName)
  })
  .catch(function(err) {
    console.log(err)
  });
    


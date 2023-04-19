var HTMLParser = require('node-html-parser');
const fs = require('fs');

const https = require('https');

const startLink = "https://vanisource.org/wiki/SB_12.13.23"
const endLink =  "https://vanisource.org/wiki/SB_1.1.1"

var save

try{
  var x = fs.readFileSync('save.json', 'utf8').trim()
  save = JSON.parse(x)
}catch{
  save = {
    data: {url: startLink},
    sym: {},
    mismatch: {}
  }
}

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

  // log(`<${save.data.url}> parsing this` )

  return new Promise(function(resolve, reject) {
    const root = HTMLParser.parse(htmlData)

    var name = url2name(save.data.url)
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
    const verses = isSummary?[""]:versesNode.map(n=>{return Buffer.from(n.textContent.trim()).toString('base64')})
    group = verses.length>1

    const links = (()=>{
      var x = root.querySelector(".mw-parser-output").getElementsByTagName("a").filter(a=>{
        return a.childNodes && a.childNodes[0] && a.childNodes[0].rawTagName=="img"
      })

      return [x[1], x[0]]
    })()

    var nextLink = links[0].getAttribute("href")
    var prevLink = links[1].getAttribute("href")

    // exception corrections
    switch(save.data.url){
      case startLink:
        prevLink=nextLink
        nextLink=null
        break
      case endLink:
        nextLink='/wiki/SB_1.1.2'
        prevLink=null
        break
      case 'https://vanisource.org/wiki/SB_12.9.19':
        prevLink='/wiki/SB_12.9.17-18'
        break 
      case 'https://vanisource.org/wiki/SB_12.3.41':
        prevLink='/wiki/SB_12.3.39-40'
        break
      case 'https://vanisource.org/wiki/SB_12.2.29':
        prevLink='/wiki/SB_12.2.27-28'
        break 
      case 'https://vanisource.org/wiki/SB_12.2.21':
        prevLink='/wiki/SB_12.2.19-20'
        break   
      case 'https://vanisource.org/wiki/SB_12.1.18':
        prevLink='/wiki/SB_12.1.15-17'
        break              
      case 'https://vanisource.org/wiki/SB_11.22.25':
        nextLink='/wiki/SB_11.22.26'
        break
      case 'https://vanisource.org/wiki/SB_11.17.50':
        prevLink='/wiki/SB_11.17.49'
        nextLink='/wiki/SB_11.17.51'
        break
      case 'https://vanisource.org/wiki/SB_10.80.23':
        prevLink='/wiki/SB_10.80.20-22'
        break 
      case 'https://vanisource.org/wiki/SB_10.50.39':
        prevLink='/wiki/SB_10.50.37-38'
        break  
      case 'https://vanisource.org/wiki/SB_10.41.20-23':
        prevLink='/wiki/SB_10.41.19'
        break  
      case 'https://vanisource.org/wiki/SB_11.19.1':
        prevLink='/wiki/SB_11.19_Summary'
        break  
      case 'https://vanisource.org/wiki/SB_11.8.3':
        nextLink='/wiki/SB_11.8.4'
        prevLink='/wiki/SB_11.8.2'
        break  
      case 'https://vanisource.org/wiki/SB_10.37.30':
        nextLink='/wiki/SB_10.37.31'
        break 
      case 'https://vanisource.org/wiki/SB_10.37.29':
        nextLink='/wiki/SB_10.37.30'
        prevLink='/wiki/SB_10.37.28'
        break  
      case 'https://vanisource.org/wiki/SB_10.24.36':
        prevLink='/wiki/SB_10.24.35'
        break 
      case 'https://vanisource.org/wiki/SB_10.10_Summary':
        nextLink='/wiki/SB_10.10.1'
        prevLink='/wiki/SB_10.9.23'
        break 
      case 'https://vanisource.org/wiki/SB_9.1.1':
        prevLink='/wiki/SB_9.1_Summary'
        break
      case 'https://vanisource.org/wiki/SB_8.16.30':
        prevLink='/wiki/SB_8.16.29'
        break 
      case 'https://vanisource.org/wiki/SB_8.5.41':
        prevLink='/wiki/SB_8.5.40'
        break 
      case 'https://vanisource.org/wiki/SB_5.7_Summary':
        prevLink='/wiki/SB_5.6.18'
        break 
      case 'https://vanisource.org/wiki/SB_4.16.27':
        prevLink='/wiki/SB_4.16.26'
        break 
      case 'https://vanisource.org/wiki/SB_4.16.26':
        prevLink='/wiki/SB_4.16.25'
        break 
      case 'https://vanisource.org/wiki/SB_4.15.26':
        prevLink='/wiki/SB_4.15.25'
        break 
      case 'https://vanisource.org/wiki/SB_4.5.26':
        prevLink='/wiki/SB_4.5.25'
        break 
      case 'https://vanisource.org/wiki/SB_1.17.15':
        prevLink='/wiki/SB_1.17.14'
        break 
      case 'https://vanisource.org/wiki/SB_1.8.25':
        prevLink='/wiki/SB_1.8.24'
        break
      case 'https://vanisource.org/wiki/SB_1.1.2':
        nextLink='/wiki/SB_1.1.3'
        prevLink='/wiki/SB_1.1.1'
        break
    }

    // fix summary non-symmetry 
    if(save.pdata && save.pdata.url.endsWith("Summary")){
      nextLink=url2link(save.pdata.url)
    }
    // save data
    save.data.name = name
    save.data.nextLink = nextLink
    save.data.prevLink = prevLink

    // parts
    if(name.split(".").length!=3){
      throw new Error(`<${save.data.url}> Parts error with name: ${name}, ${name.split(".").length} parts`)
    }
    if(nextLink && link2name(nextLink).split(".").length!=3){
      throw new Error(`<${save.data.url}> Parts error with nextLink: ${link2name(nextLink)}, ${link2name(nextLink).split(".").length} parts`)
    }
    if(prevLink && link2name(prevLink).split(".").length!=3){
      throw new Error(`<${save.data.url}> Parts error with prevLink: ${link2name(prevLink)}, ${link2name(prevLink).split(".").length} parts`)
    }

    // cont
    if(save.pdata){
      var prevText = getTexts(save.pdata.name)
      var thisText = getTexts(name)
      
      var prevVerse = prevText[0]
      var thisVerse = thisText[thisText.length-1]

      if(!isNaN(prevVerse) && !isNaN(thisVerse)){
        var thisNum = parseInt(thisVerse)
        var prevNum = parseInt(prevVerse)
        var diff = thisNum-prevNum
        if(diff!=-1 && prevVerse!="1"){
          if(diff>0){
            throw new Error(`<${save.data.url}> looped back to ${save.pdata.name}`)
          }else{
            throw new Error(`<${save.data.url}> jumped ${Math.abs(diff)} verses, previous verse: ${save.pdata.name}`)
          }
        }
      }else{
        if(thisVerse=="Summary" || thisVerse=="Invocation"){
          if(prevVerse!="1"){
            throw Error(`<${save.data.url}> this verse in summary but previous verse is not 1: ${prevLink}`)
          }
        }else{
          if(prevVerse!="Summary" && prevVerse!="Invocation"){
            throw Error(`<${save.data.url}> Either of verses may be non-numerical, previous verse is ${prevLink}`)
          }
        }
      }
    }

    // symmetry test
    if(save.pdata && save.data.nextLink!=url2link(save.pdata.url)){
      log(`broken symmetry: ${save.data.nextLink} and ${save.pdata.url}`)
      save.sym[save.data.url] = save.pdata.prevLink
    }    

    // mismatch
    if(!isSummary && verses.length!=texts.length){
      log(`mismatch: ${verses.length}/${texts.length}: ${save.data.url}`)
      save.mismatch[save.data.url] = `${verses.length}/${texts.length}: ${save.data.url}`
    }
    resolve()
  });
}

function updateNextUrl(res, err){
  return new Promise(function(resolve, reject) {
    if(err){
      reject(err)
    }else{
      try {
        fs.writeFileSync('save.json', JSON.stringify(save, null, 2));
      } catch (err) {
        reject(err)
      }
      save.pdata = JSON.parse(JSON.stringify(save.data))
      save.data = {url: `https://vanisource.org${save.data.prevLink}`}

      resolve()
    }
  })
}

function log(l){
  console.log(`${new Date()}: ${save.pdata.name}> ${l}`)
}

function parseIt() {
  getHtml(save.data.url)
  .then(parseHtml)
  .then(updateNextUrl)
  .then(()=>{
    if(save.pdata.url!=endLink){
      log(`parsed ${save.pdata.url}`)
      parseIt()
    }else{
      log("SB completely parsed!!")
    }
  })
  .catch(function(err) {
    process.stdout.write('\x07');
    console.log(err)
    log(err)
  });  
}

parseIt()








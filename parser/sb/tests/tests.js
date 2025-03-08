var HTMLParser = require('node-html-parser');
var corrections = require("./corrections.js")
const fs = require('fs');

const https = require('https');

const startLink = "https://vanisource.org/wiki/SB_12.13.23"
const endLink = "https://vanisource.org/wiki/SB_1.1.1"

var save

try {
  var x = fs.readFileSync('save.json', 'utf8').trim()
  save = JSON.parse(x)
} catch {
  save = {
    data: { url: startLink },
    sym: {},
    mismatch: {}
  }
}

function getTexts(t) {
  var p = t.split(".")
  return p[p.length - 1].split("-")
}

function url2link(u) {
  return u.replace("https://vanisource.org", "")
}

function url2name(u) {
  return u.replace("https://vanisource.org/wiki/", "").replace("SB_", "SB ").replaceAll("_", ".")
}

function link2name(l) {
  return l.replace("/wiki/", "").replace("SB_", "SB ").replaceAll("_", ".")
}

function getHtml(url) {
  return new Promise(function (resolve, reject) {
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
    })
  })
}

function parseHtml(htmlData) {

  return new Promise(function (resolve, reject) {
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
    if (name.endsWith("Summary")) {
      canto = parts[0]
      chapter = parts[1].split(" ")[0]
      texts = ["Summary"]
      isSummary = true
    } else {
      if (parts.length == 3) {
        canto = parts[0]
        chapter = parts[1]
        text = parts[2]
      } else if (parts.length == 2) {
        chapter = parts[0]
        text = parts[1]
      }
      texts = (() => {
        const hasAlpha = /[a-zA-Z]/.test(text)
        const alpha = hasAlpha ? text.match(/[a-zA-Z]+/g)[0] : ""
        const parts = text.split("-")
        if (parts.length == 1) {
          return parts
        }
        group = true
        var texts = []
        for (var i = parseInt(parts[0].replaceAll(alpha, "")); i <= parseInt(parts[1].replaceAll(alpha, "")); i++) {
          texts.push(i + alpha)
        }
        return texts
      })()
    }

    var versesNode = (() => {
      var x = root.querySelector(".verse")
      if (!!x) {
        return x.getElementsByTagName("dl")
      }
      return []

    })()
    const verses = isSummary ? [""] : (corrections.verses[save.data.url] || versesNode.map(n => { return n.textContent.trim() })).map(n => { return Buffer.from(n).toString('base64') })
    group = verses.length > 1

    const links = (() => {
      var x = root.querySelector(".mw-parser-output").getElementsByTagName("a").filter(a => {
        return a.childNodes && a.childNodes[0] && a.childNodes[0].rawTagName == "img"
      })

      return [x[1], x[0]]
    })()

    var nextLink = (corrections.links[save.data.url] && corrections.links[save.data.url].nextLink) || links[0].getAttribute("href")
    var prevLink = (corrections.links[save.data.url] && corrections.links[save.data.url].prevLink) || links[1].getAttribute("href")

    // fix edge cases
    switch (save.data.url) {
      case startLink:
        nextLink = null
        break
      case endLink:
        prevLink = null
        break
    }

    // fix summary non-symmetry 
    if (save.pdata && save.pdata.url.endsWith("Summary")) {
      nextLink = url2link(save.pdata.url)
    }
    // save data
    save.data.name = name
    save.data.nextLink = nextLink
    save.data.prevLink = prevLink

    // parts
    if (name.split(".").length != 3) {
      throw new Error(`<${save.data.url}> Parts error with name: ${name}, ${name.split(".").length} parts`)
    }
    if (nextLink && link2name(nextLink).split(".").length != 3) {
      throw new Error(`<${save.data.url}> Parts error with nextLink: ${link2name(nextLink)}, ${link2name(nextLink).split(".").length} parts`)
    }
    if (prevLink && link2name(prevLink).split(".").length != 3) {
      throw new Error(`<${save.data.url}> Parts error with prevLink: ${link2name(prevLink)}, ${link2name(prevLink).split(".").length} parts`)
    }

    // cont
    if (save.pdata) {
      var prevText = getTexts(save.pdata.name)
      var thisText = getTexts(name)

      var prevVerse = prevText[0]
      var thisVerse = thisText[thisText.length - 1]

      if (!isNaN(prevVerse) && !isNaN(thisVerse)) {
        var thisNum = parseInt(thisVerse)
        var prevNum = parseInt(prevVerse)
        var diff = thisNum - prevNum
        if (diff != -1 && prevVerse != "1") {
          if (diff > 0) {
            throw new Error(`<${save.data.url}> looped back to ${save.pdata.name}`)
          } else {
            throw new Error(`<${save.data.url}> jumped ${Math.abs(diff)} verses, previous verse: ${save.pdata.name}`)
          }
        }
      } else {
        if (thisVerse == "Summary" || thisVerse == "Invocation") {
          if (prevVerse != "1") {
            throw Error(`<${save.data.url}> this verse in summary but previous verse is not 1: ${prevLink}`)
          }
        } else {
          if (prevVerse != "Summary" && prevVerse != "Invocation") {
            throw Error(`<${save.data.url}> Either of verses may be non-numerical, previous verse is ${prevLink}`)
          }
        }
      }
    }

    // symmetry test
    if (save.pdata && save.data.nextLink != url2link(save.pdata.url)) {
      log(`broken symmetry: ${save.data.nextLink} and ${save.pdata.url}`)
      save.sym[save.data.nextLink] = save.pdata.url
    }

    // mismatch
    if (!isSummary && verses.length != texts.length) {
      log(`mismatch: ${verses.length}/${texts.length}: ${save.data.url}`)
      save.mismatch[save.data.url] = `${verses.length}/${texts.length}: ${save.data.url}`
    }
    resolve()
  });
}

function updateNextUrl(res, err) {
  return new Promise(function (resolve, reject) {
    if (err) {
      reject(err)
    } else {
      try {
        fs.writeFileSync('save.json', JSON.stringify(save, null, 2));
      } catch (err) {
        reject(err)
      }
      save.pdata = JSON.parse(JSON.stringify(save.data))
      save.data = { url: `https://vanisource.org${save.data.prevLink}` }

      resolve()
    }
  })
}

function log(l) {
  console.log(`${new Date()}: ${save.pdata.name}> ${l}`)
}

function parseIt() {
  getHtml(save.data.url)
    .then(parseHtml)
    .then(updateNextUrl)
    .then(() => {
      if (save.pdata.url != endLink) {
        log(`parsed ${save.pdata.url}`)
        parseIt()
      } else {
        log("SB completely parsed!!")
      }
    })
    .catch(function (err) {
      process.stdout.write('\x07');
      console.log(err)
      log(err)
    });
}

parseIt()








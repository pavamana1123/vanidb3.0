const Text = require('../text.js')
var HTMLParser = require('node-html-parser')
const https = require('https')

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

async function run() {
    const text = new Text()
    try {
        const devLink = `https://vedabase.io/en/library/${text.name.toLowerCase().replaceAll('.', '/').replaceAll(' ', '/')}`
        
        getHtml(devLink).then(html => {
            console.log(devLink, html)
            const root = HTMLParser.parse(html)
            var raw =  root.querySelectorAll('*')
            console.log(raw)
        })

    } catch (err) {
        console.error(err.message)
    } finally {
        text.close()
    }
}

run()
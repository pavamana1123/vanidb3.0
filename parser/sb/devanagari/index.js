const { Text, Title } = require('../text.js')
var HTMLParser = require('node-html-parser')
const fs = require('fs')
const https = require('https')
const exceptions = require('./exceptions.js')

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

  try {
    const start = fs.readFileSync('track.txt', 'utf8').trim()

    const text = new Text(start)

    await text.load()

    do {

      var verses, html

      if (exceptions[text.name]) {
        verses = exceptions[text.name]
      } else {
        html = await getHtml(`https://vedabase.io/en/library/${text.name.toLowerCase().replaceAll('.', '/').replaceAll(' ', '/')}/`)

        verses = HTMLParser.parse(html)
          .querySelectorAll('.em\\:text-lg')[0]
          .childNodes.map(l => l.textContent)
          .filter(l => !!l).join('\n').split("॥")
          .map(l => l.trim())
          .filter(l => l && !/^[\u0966-\u096F]+$/.test(l)) // checks if is a hindi/sanskrit numeral

        if (text.results[0].chapter == '1') {
          const cantoName = HTMLParser.parse(html).querySelectorAll('[aria-label="Breadcrumb"]')[0].textContent.split('Canto')[1].split('CHAPTER')[0].split(':')[1].replaceAll('»', '').trim()
          const title = new Title('SB', text.results[0].canto, null, cantoName)
          await title.save()
        }

        if (text.results[0].text == '1' || text.results[0].text == '2') {
          const chapterName = HTMLParser.parse(html).querySelectorAll('[aria-label="Breadcrumb"]')[0].textContent.split('CHAPTER')[1].split(':')[1].trim()
          const title = new Title('SB', text.results[0].canto, text.results[0].chapter, chapterName)
          await title.save()
        }
      }

      verses.forEach(async (devanagari, i) => {
        text.results[i].devanagari = `${devanagari} ${devanagari.split('\n').length > 1 ? '।।' : '।'}`
      })
      await text.saveDevanagari()

      fs.writeFileSync('track.txt', text.name)
      console.log(`${text.name} saved`)

      if (text.results[0].next == 'SB 10.1.Additional.Notes') {
        text.results[0].next = 'SB 10.2.1-2'
      }

      if (text.results[0].next == 'SB 11.Appendix') {
        text.results[0].next = 'SB 12.1.1-2'
      }

      await text.next()
    } while (1)
  } catch (err) {
    console.error(err.message)
  }
}

run()
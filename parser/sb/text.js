const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'iskconmy_vanidb',
    waitForConnections: true,
    multipleStatements: true,
    connectionLimit: 10,
    queueLimit: 0
})

const dev2kan = {
    'अ': 'ಅ', 'आ': 'ಆ', 'इ': 'ಇ', 'ई': 'ಈ', 'उ': 'ಉ', 'ऊ': 'ಊ', 'ऋ': 'ಋ', 'ए': 'ಏ', 'ऐ': 'ಐ',
    'ओ': 'ಓ', 'औ': 'ಔ', 'अं': 'ಅಂ', 'अः': 'ಅಃ',
    'क': 'ಕ', 'ख': 'ಖ', 'ग': 'ಗ', 'घ': 'ಘ', 'ङ': 'ಙ',
    'च': 'ಚ', 'छ': 'ಛ', 'ज': 'ಜ', 'झ': 'ಝ', 'ञ': 'ಞ',
    'ट': 'ಟ', 'ठ': 'ಠ', 'ड': 'ಡ', 'ढ': 'ಢ', 'ण': 'ಣ',
    'त': 'ತ', 'थ': 'ಥ', 'द': 'ದ', 'ध': 'ಧ', 'न': 'ನ',
    'प': 'ಪ', 'फ': 'ಫ', 'ब': 'ಬ', 'भ': 'ಭ', 'म': 'ಮ',
    'य': 'ಯ', 'र': 'ರ', 'ल': 'ಲ', 'व': 'ವ',
    'श': 'ಶ', 'ष': 'ಷ', 'स': 'ಸ', 'ह': 'ಹ',
    'ळ': 'ಳ', 'क्ष': 'ಕ್ಷ', 'ज्ञ': 'ಜ್ಞ',

    'ा': 'ಾ', 'ि': 'ಿ', 'ी': 'ೀ', 'ु': 'ು', 'ू': 'ೂ',
    'ृ': 'ೃ', 'े': 'ೆ', 'ै': 'ೈ', 'ो': 'ೊ', 'ौ': 'ೌ',
    'ं': 'ಂ', 'ः': 'ಃ', '्': '್',

    '०': '೦', '१': '೧', '२': '೨', '३': '೩', '४': '೪',
    '५': '೫', '६': '೬', '७': '೭', '८': '೮', '९': '೯'
}

function toKan(text) {
    return text.split('').map(char => dev2kan[char] || char).join('')
}

class Title {
    constructor(book, canto, chapter, title) {
        this.book = book
        this.canto = canto
        this.chapter = chapter
        this.title = title
    }

    async save() {
        const query = `
        INSERT INTO titles
            (book, canto, chapter, title)
        VALUES ('${this.book}', '${this.canto}', ${this.chapter ? `'${this.chapter}'` : '0'}, '${this.title}') as new
        ON DUPLICATE KEY UPDATE book = new.book, canto = new.canto, chapter=new.chapter, title = new.title;`

        return new Promise((resolve, reject) => {
            pool.query(query, null, (err, results) => {
                if (err) return reject(err)
                resolve()
            })
        })
    }
}

class Text {
    constructor(name = 'SB 1.1.1') {
        this.name = name
        this.results = []
        this.currentIndex = 0
        this.length = name.split(" ")[1].split(".")[2].split("-").map(ord => ord.replace(/\D/g, "")).reduce((a, b) => b - a) + 1
    }

    async load() {
        const query = `
      SELECT book, canto, chapter, text, next, prev, isGroup, isSummary 
      FROM texts 
      WHERE name = ?
      ORDER BY text ASC
    `

        return new Promise((resolve, reject) => {
            pool.query(query, [this.name], (err, results) => {
                if (err) return reject(err)
                if (results.length) {
                    this.results = results
                    this.currentIndex = 0
                    resolve(this.results)
                } else {
                    reject(new Error(`Text not found: ${this.name}`))
                }
            })
        })
    }

    getCurrent() {
        if (!this.results.length) throw new Error('No data loaded')
        return this.results[this.currentIndex]
    }

    async saveDevanagari() {

        var self = this

        const found = this.results.reduce((a, b) => { return a && b.devanagari }, true)

        if (found) {
            const query =
                this.results.map(t => `UPDATE texts
            SET
            devanagari = "${Buffer.from(t.devanagari).toString('base64')}",
            kannada = "${Buffer.from(toKan(t.devanagari)).toString('base64')}",
            ord = ${Date.now()}
            WHERE name = '${self.name}' AND text = '${t.text}';`.trim()).join('\n')

            return new Promise((resolve, reject) => {
                pool.query(query, null, err => {
                    if (err) return reject(err)
                    resolve()
                })
            })
        } else {
            console.log(`Devanagari not found for verse:`, this.name)
        }


    }

    async next() {
        if (!this.results.length) throw new Error('No data loaded')
        const nextName = this.results[0].next
        if (!nextName) throw new Error('No next text available')

        this.name = nextName
        await this.load()

    }

    async prev() {
        if (!this.results.length) throw new Error('No data loaded')

        const prevName = this.results[0].prev
        if (!prevName) throw new Error('No previous text available')

        this.name = prevName
        await this.load()

    }

    close() {
        pool.end()
    }
}

module.exports = {
    Title,
    Text
}

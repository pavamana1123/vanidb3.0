const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'iskconmy_vanidb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

class Text {
    constructor(name = 'SB 1.1.1') {
        this.name = name
        this.results = []
        this.currentIndex = 0
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
                    reject(new Error('Text not found'))
                }
            })
        })
    }

    getCurrent() {
        if (!this.results.length) throw new Error('No data loaded')
        return this.results[this.currentIndex]
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

module.exports = Text

const mysql = require('mysql2')
const fs = require('fs')

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

const verseQuery = `
    SELECT 
    book,
    canto,
    chapter,
    text,
    CONVERT( FROM_BASE64(verse) USING UTF8) AS verse,
    CONVERT( FROM_BASE64(devanagari) USING UTF8) AS devanagari
FROM
    texts
WHERE
    ord IS NOT NULL AND isSummary = 0
ORDER BY ord`

pool.query(verseQuery, null, (err, results) => {
    if (!err) {
        fs.writeFile('verses.js', `const data = ${JSON.stringify(results, null, 2)}`, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err)
                return
            }
            console.log('File written successfully')
            // pool.end()
        })
    } else {
        console.log(err)
    }
})

const titlesQuery = `
    SELECT 
    canto,
    chapter,
    title
FROM
    titles`.trim()

pool.query(titlesQuery, null, (err, results) => {
    if (!err) {
        fs.writeFile('titles.js', `const data = ${JSON.stringify(results, null, 2)}`, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err)
                return
            }
            console.log('File written successfully')
            // pool.end()
        })
    } else {
        console.log(err)
    }
})

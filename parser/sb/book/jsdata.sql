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
ORDER BY ord
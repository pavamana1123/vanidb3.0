const newPage = id => {
    var page = document.createElement('div')
    page.className = 'page'
    page.id = `page-${id}`
    document.body.appendChild(page)

    var pageBreak = document.createElement('div')
    pageBreak.className = 'page-break'
    document.body.appendChild(pageBreak)
}

var pageNumber = 1
newPage(`${pageNumber}`)

const addTitle = text => {
    var title = document.createElement('div')
    title.className = 'text-title'
    title.textContent = `SB ${text.canto}.${text.chapter}.${text.text}`
    document.getElementById(`page-${pageNumber}`).appendChild(title)
    return title
}

const addLine = ln => {
    var line = document.createElement('div')
    line.className = 'text-line'
    line.textContent = ln
    document.getElementById(`page-${pageNumber}`).appendChild(line)
    return line
}

data.forEach(text => {
    var title = addTitle(text)
    var page = document.getElementById(`page-${pageNumber}`)
    if (page.scrollWidth > page.clientWidth) {
        title.remove()
        pageNumber++
        newPage(`${pageNumber}`)
        addTitle(text)
    }

    text.devanagari.split('\n').forEach(ln => {
        var line = addLine(ln)
        var page = document.getElementById(`page-${pageNumber}`)
        if (page.scrollWidth > page.clientWidth) {
            line.remove()
            pageNumber++
            newPage(`${pageNumber}`)
            addLine(ln)
        }
    })

    text.verse.split('\n').forEach(ln => {
        var line = addLine(ln)
        var page = document.getElementById(`page-${pageNumber}`)
        if (page.scrollWidth > page.clientWidth) {
            line.remove()
            pageNumber++
            newPage(`${pageNumber}`)
            addLine(ln)
        }
    })
})

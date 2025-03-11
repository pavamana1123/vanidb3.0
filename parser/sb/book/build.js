const newPage = id => {
    var page = document.createElement('div')
    page.className = 'page'
    page.id = id
    document.body.appendChild(page)

    var pageBreak = document.createElement('div')
    pageBreak.className = 'page-break'
    document.body.appendChild(pageBreak)
}

newPage(`1`)

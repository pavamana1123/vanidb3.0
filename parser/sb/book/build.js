var pageNumber = 1

const addPageBreak = nonext => {
    var pageBreak = document.createElement('div')
    pageBreak.className = 'page-break'
    document.body.appendChild(pageBreak)
    pageNumber++
}

const addEmptyPage = () => {
    var empty = document.createElement('div')
    empty.className = 'empty-page'
    document.body.appendChild(empty)

    addPageBreak()
}

const newCantoPage = text => {

    if (pageNumber % 2 == 0) {
        addEmptyPage()
    }

    var cantoPage = document.createElement('div')
    cantoPage.className = 'canto-page'
    cantoPage.id = `cantoPage-${text.canto}`
    cantoPage.innerHTML = `
    <div class='canto-page-cont'>
        <div class='canto-page-title'>${`Canto ${text.canto}\n${titles.filter(title => title.canto == text.canto && title.chapter == '0')[0].title}`}</div>
    </div>`.trim()
    document.body.appendChild(cantoPage)

    addPageBreak()
    addEmptyPage()
}

const newChapter = text => {
    if (pageNumber % 2 == 0) {
        addEmptyPage()
    }
    var chapterPage = document.createElement('div')
    chapterPage.className = 'canto-page'
    chapterPage.id = `chapterPage-${text.canto}`
    chapterPage.innerHTML = `
    <div class='canto-page-cont'>
        <div class='canto-page-title'>${`Chapter ${text.chapter}\n${titles.filter(title => title.canto == text.canto && title.chapter == text.chapter)[0].title}`}</div>
    </div>`.trim()
    document.body.appendChild(chapterPage)

    addPageBreak()
    addEmptyPage()
    newPage(text)
    pageNumber--
    console.log(pageNumber)
}

const newPage = text => {
    var page = document.createElement('div')
    page.className = 'page'
    page.id = `page-${pageNumber}`
    document.body.appendChild(page)

    addPageBreak()

    var topBorder = document.createElement('div')
    topBorder.innerHTML = `
    <div class='page-top-border'>
        <div class='page-top-border-1'></div>
        <div class='page-top-border-2'></div>
    </div>`.trim()
    page.appendChild(topBorder)

    var pageTitle = document.createElement('div')
    pageTitle.innerHTML = `
    <div class='page-title'>${titles.filter(title => text.canto == title.canto && text.chapter == title.chapter)[0].title}</div>`.trim()
    page.appendChild(pageTitle)


    var pageNumberDiv = document.createElement('div')
    pageNumberDiv.innerHTML = `
    <div class='page-num'>${pageNumber}</div>`.trim()
    page.appendChild(pageNumberDiv)
}

const addDevanagari = text => {
    var devanagari = document.createElement('div')
    devanagari.className = 'text-devanagari'
    devanagari.innerHTML = `
    <div class='text-title'>SB ${text.canto}.${text.chapter}.${text.text}</div>
    <div class='sep'></div>
    <div class='text-line'>${text.devanagari}</div>
    <div class='sep'></div>`.trim()

    document.getElementById(`page-${pageNumber}`).appendChild(devanagari)
    return devanagari
}

const addTx = text => {
    var tx = document.createElement('div')
    tx.innerHTML = `
    <div class='text-tx'>${text.verse.trim()}</div>
    <div class='sep'></div>`.trim()

    document.getElementById(`page-${pageNumber}`).appendChild(tx)

    return tx
}


data.forEach(text => {

    if (text.chapter == '1' && text.text == '1') {
        newCantoPage(text)
    }

    if (text.text == '1') {
        newChapter(text)
    }

    var devanagari = addDevanagari(text)
    var page = document.getElementById(`page-${pageNumber}`)
    if (page.scrollWidth > page.clientWidth) {
        devanagari.remove()
        newPage(text)
        addDevanagari(text)
    }

    var tx = addTx(text)
    var page = document.getElementById(`page-${pageNumber}`)
    if (page.scrollWidth > page.clientWidth) {
        tx.remove()
        newPage(text)
        addTx(text)
    }
})

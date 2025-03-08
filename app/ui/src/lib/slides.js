const paginate = (text, className) => {
    var d = document.createElement("div")
    d.setAttribute("class", className)
    d.style = `
    position: absolute;
    top: 0;
    z-index: -999;`
    document.body.appendChild(d)

    var words = text.split(" ")
    var start = 0
    var end = 1
    var slides = []

    while (end <= words.length) {
        d.textContent = words.slice(start, end).join(" ").trim()
        if (d.scrollHeight > d.clientHeight) {
            end--
            slides.push(words.slice(start, end).join(" ").trim())
            start = end
            end++
            continue
        }
        end++
    }
    d.remove()
    return slides
}

export default paginate


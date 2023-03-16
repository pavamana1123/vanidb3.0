const paginate = (text, className)=>{
    var d = document.createElement("div")
    d.setAttribute("class",className)
    d.style=`
    position: absolute;
    top: 0;
    z-index: -999;`

    var words = text.split(" ")
    var start, end = 0
    
    while(end<=words.length){
        d.textContent=words.slice(start,end)
        if(d.scrollHeight>d.clientHeight){
            
        }
    }

    d.remove()

    
}

export default paginate


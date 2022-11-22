let bilder = document.getElementsByClassName("bild")

let counter =''

function left(){
    counter = bilder[4].src 
    bilder [4].src = bilder[3].src
    bilder [3].src = bilder [2].src
    bilder [2].src = bilder [1].src
    bilder [1].src = bilder [0].src
    bilder [0].src = counter 
}

function right(){
    counter = bilder[0].src 
    bilder [0].src = bilder[1].src
    bilder [1].src = bilder [2].src
    bilder [2].src = bilder [3].src
    bilder [3].src = bilder [4].src
    bilder [4].src = counter 
}
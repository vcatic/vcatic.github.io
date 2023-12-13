
let content = document.getElementById("content")

function mainSite (){

    content.innerHTML =""

    content.innerHTML+=`<h2>Portfolio</h2><div id="body"><div id="box1"><h1>Vanesa Catic</h1><div>Mein Name ist Vanesa, ich bin 17 Jahre alt und besuche zur Zeit die HTL Leonding im Bereich Medientechnik. Ich liebe es meinen kreativen Ideen freien Lauf zu lassen und diese in meinen Arbeiten umzusetzen.
    <br><br>Für meine Webprogrammierung verwende ich Visual Studio Code und programmiere hauptsächlich in HTML, CSS und JavaScript.
    <br><br> Um einen Überblick für meine Designs zu bekommen benutze ich gerne das Tool "Figma" mit dem ich meine Designs und Userinterfaces darstellen kann. Auch Moodboards sind ein Teil meiner Designplanung. Ich lege großen Wert darauf meine Farben miteinander abzustimmen und eine angenehme Weboberfläche zu entwickeln. 
    <br><br> Für meine Bildbearbeitung bin ich sehr vertraut mit Photoshop und verwende dieses gerne um meine Bilder zu perfektionieren. Aber auch LightRoom und Illustrator sind mir ein Begriff.</div> </div><div id="box2"><img src="./imgs/Bild.jpg"></div></div>`
}

mainSite()

function projectSite(){
    content.innerHTML =""
    content.innerHTML +=`<div id="text"><h3>Meine Arbeiten</h3>
    <p>Hier finden Sie ein paar meiner Arbeiten und Schulprojekte</p></div>
    <div id="web"><h2>Webprojekte</h2><div id="prBox1"><p>Hier habe ich für einen Adventskalender mit Rätseln für meinen Medientechnikunterricht entwickelt </p><div id="imgBox"><img src="./imgs/kalender1.png"><img src="./imgs/kalender2.png"></div></div>
    <div id="prBox1"><p>Hier war die Aufgabe eine Weboberfläche zu entwickeln auf der man etwas customizen kann. Ich habe mich für einen Shoecustomizer entschieden. </p><div id="imgBox"><img src="./imgs/customize1.png"><img src="./imgs/customize2.png"></div></div></div>
    <div id="web"><h2>Design</h2><div id="prBox1"><p>Hier habe ich Figma genutzt um als Schulprojekt ein Design für unsere Schulnachhilfebörse ein Design zu erstellen</p><div id="imgBox"><img src="./imgs/figma1.png"><img src="./imgs/figma2.png"></div></div></div>
    <div id="web"><h2>Bilder</h2><div id="prBox1"><p>Ein paar meiner Bilder die ich gemacht und bearbeitet hab</p><div id="imgBox"><img src="./imgs/schwarzweiß.jpg"><img src="./imgs/Farbe.jpg"></div></div>
    <div id="prBox1"><div id="imgBox"><img src="./imgs/kuenstler.jpg"><img src="./imgs/DSC_0172.jpg"></div></div>`
}


function infoSite(){

    content.innerHTML =""

    content.innerHTML+=`<h2>Infos</h2><div id="body1"><div id="box3"><br><br><h4>Email: caticvanesa0@gmail.com<h4><br><br><h4>Github: <a href="https://github.com/vcatic/projects">klicke hier</a></h4><br><br><h4>Figma Design:<a href="https://www.figma.com/file/ZHvadYTlvYM2xanClWCINM/Nachhilfeb%C3%B6rse?type=design&node-id=0%3A1&mode=design&t=48Bh1eGShrBL9lGs-1"> klicke hier</a> </h4><br><br><h4>Bilder: <a href="https://github.com/vcatic/pictures">klicke hier</a></h4></div><div id="box4"><img src="./imgs/info.jpg"></div></div>`
}
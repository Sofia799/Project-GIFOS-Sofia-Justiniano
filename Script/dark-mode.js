function cambiarModo() {
    let objDark = document.querySelectorAll(".dark");
    let blackline = document.querySelectorAll(".blackLine")

    const theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light-mode-letras.css") {
        theme.href = "dark-mode-letras.css";
    } else {
        theme.href = "light-mode-letras.css";
    }

    for (const obj of objDark) {
        if (obj.className == "light") {
            obj.classList.toggle("dark");
        } else {
            obj.classList.toggle("light");
        }
    }



    let objMoreDark = document.querySelectorAll(".moreDark");

    for (const obj of objMoreDark) {
        if (obj.className == "light2") {
            obj.classList.toggle("moreDark");
        } else {
            obj.classList.toggle("light2")
        }
    }



    // cambiarColorTexto()

}

function cambiarColorTexto() {

    const whiteTexts = document.getElementsByClassName("whiteText");


    for (let i = 0; i < whiteTexts.length; i++) {

        const textColor = whiteTexts[i].style.color;
        console.log(textColor)

        // switch (textColor) {
        //     case "black":
        //     case "#572EE5":
        //         textColor = "white";
        //         break;

        //     default:
        //         textColor = "572EE5"
        //         break;
        // }
    }


}
// for (const texto of textos) {
//     if (texto.) {

//     }
// }




// let header = document.getElementById("header");
// let logoHeader = document.getElementsByClassName("img-logo-gifos");

// let nav = document.getElementById("nav");

// let sectionBusqGifos = document.getElementById("container-busqGifos");
// let trending = document.getElementById("trending");
// let trendingGifos = document.getElementById("container-gifs");
// let footer = document.getElementById("container-footer");
// let lineHeader = document.getElementById("linea-azul");
// let lineFooter = document.getElementById("linea-azul-footer");

// if (header.className == "light") {
//     header.classList.toggle("dark");
// } else {
//     header.classList.toggle("light")
//         //changeLogo(logoHeader);
// }

// if (nav.className == "blue") {
//     nav.classList.toggle("moreDark");
// } else {
//     nav.classList.toggle("blue");
// }

// if (sectionBusqGifos.className == "light") {
//     sectionBusqGifos.classList.toggle("dark");
// } else {
//     sectionBusqGifos.classList.toggle("light");
// }

// if (trending.className == "light") {
//     trending.classList.toggle("dark");
// } else {
//     trending.classList.toggle("light");
// }

// if (trendingGifos.className == "light2") {
//     trendingGifos.classList.toggle("moreDark");
// } else {
//     trendingGifos.classList.toggle("light2");
// }

// if (footer.className == "light") {
//     footer.classList.toggle("dark");
// } else {
//     footer.classList.toggle("light");
// }

// if (lineHeader.className == "blue-line") {
//     lineHeader.classList.toggle("black-line")
// } else {
//     lineHeader.classList.toggle("blue-line");
// }

// if (lineFooter.className == "blue-line") {
//     lineFooter.classList.toggle("black-line")
// } else {
//     lineFooter.classList.toggle("blue-line")
// }
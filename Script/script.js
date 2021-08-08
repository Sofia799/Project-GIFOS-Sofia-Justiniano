function cambiarModo() {
    let objDark = document.querySelectorAll(".dark");
    let blueline = document.querySelectorAll(".blue-line")
        //console.log(darkMode);

    for (const obj of objDark) {
        if (obj.className == "light") {
            obj.classList.toggle("dark");
        } else {
            obj.classList.toggle("light");
        }
    }

    for (const obj of blueline) {
        if (obj.className == "blue-line") {
            obj.classList.toggle("black-line")
        } else {
            obj.classList.toggle("blue-line")
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

}


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
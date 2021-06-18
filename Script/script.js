function cambiarModo() {
    let header = document.getElementById("header");
    let sectionBusqGifos = document.getElementById("container-busqGifos");
    let trending = document.getElementById("trending");
    let trendingGifos = document.getElementById("container-gifs");
    let footer = document.getElementById("container-footer");
    let lineHeader = document.getElementById("linea-azul");
    let lineFooter = document.getElementById("linea-azul2");

    if (header.className == "light") {
        header.classList.toggle("dark");
    } else {
        header.classList.toggle("light")
    }

    if (sectionBusqGifos.className == "light") {
        sectionBusqGifos.classList.toggle("dark");
    } else {
        sectionBusqGifos.classList.toggle("light");
    }

    if (trending.className == "light") {
        trending.classList.toggle("dark");
    } else {
        trending.classList.toggle("light");
    }

    if (trendingGifos.className == "light2") {
        trendingGifos.classList.toggle("moreDark");
    } else {
        trendingGifos.classList.toggle("light2");
    }

    if (footer.className == "light") {
        footer.classList.toggle("dark");
    } else {
        footer.classList.toggle("light");
    }

    if (lineHeader.className == "blue-line") {
        lineHeader.classList.toggle("black-line")
    } else {
        lineHeader.classList.toggle("blue-line");
    }

    if (lineFooter.className == "blue-line") {
        lineFooter.classList.toggle("black-line")
    } else {
        lineFooter.classList.toggle("blue-line")
    }

}
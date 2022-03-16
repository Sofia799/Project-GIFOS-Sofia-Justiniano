function cambiarModo() {
    let objDark = document.querySelectorAll(".dark");
    let imgLogo = document.getElementById("logo");
    let burger = document.getElementById("burger");


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

    if (!imgLogo.src.match("noct")) {
        imgLogo.src = "./Images/logo-mobile-modo-noct.svg";
    } else {
        imgLogo.src = "./Images/logo_gifos.svg"
    }

    if (!burger.src.match("noct")) {
        burger.src = "./Images/burger-modo-noct.svg"
    } else {
        burger.src = "./Images/burger.svg"
    }


    let cruzButton = document.getElementById("btn-cruz");

    if (!cruzButton.src.match("noc")) {
        cruzButton.src = "./Images/CTA-crar-gifo-modo-noc.svg";
    } else {
        cruzButton.src = "./Images/button-crear-gifo.svg"
    }


    let lupa = document.getElementById("lupa");

    if (!lupa.src.match("mod-noc")) {
        lupa.src = "./Images/icon-search-mod-noc.svg"
    } else {
        lupa.src = "./Images/icon-search.svg"
    }

}
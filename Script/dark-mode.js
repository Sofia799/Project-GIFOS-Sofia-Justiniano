function cambiarModo() {
    let objDark = document.querySelectorAll(".dark");

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

}
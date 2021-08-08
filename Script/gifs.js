const solicitarGifs = () => {
    let peticion = fetch("https://api.giphy.com/v1/gifs/random?api_key=QBYCAkfYZDPZlc2VpoeJPAT2f7lKOOY7&tag=&rating=g")
        .then((respuesta) => {
            console.log(respuesta);
            return respuesta.json();
        })

    return peticion.then((result) => {
        console.log(result);
    });

}

const gifs = document.getElementById("gifs");
const solicitarGifs = () => {
    const apiKey = "QBYCAkfYZDPZlc2VpoeJPAT2f7lKOOY7"
    let peticion = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5&rating=g`)
        .then((response) => {
            return response.json();
        }).catch((error) => {
            console.error(error);
        });

    return peticion.then((result) => {
        const gifsUrl = result.data.map(gif => gif.images.fixed_height.url);
        addGifs(gifsUrl);
    })

}

function addGifs(gifsUrl) {
    gifsUrl.forEach(url => {

        let gifsContainer = document.getElementById("gifs");
        let img = document.createElement("img");

        img.src = url;
        gifsContainer.appendChild(img);

    });
}



solicitarGifs();
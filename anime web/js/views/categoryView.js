function showAnimes(animes) {

    const container = document.getElementById("animeContainer");

    container.innerHTML = "";

    animes.forEach(anime => {

        container.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow">
                <img src="${anime.image}" 
                     class="card-img-top"
                     alt="${anime.title}">
                <div class="card-body">
                    <h5 class="card-title">
                        ${anime.title}
                    </h5>
                </div>
            </div>
        </div>
        `;
    });
}
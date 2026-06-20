const params = new URLSearchParams(window.location.search);

const genre = params.get("genre");

const filteredAnimes = animes.filter(
    anime => anime.genre === genre
);

showAnimes(filteredAnimes);
const fs = require('fs');

const getMovies = JSON.parse(fs.readFileSync('./data/movies.json','utf8'));
const movies = getMovies.movies;
const totalMovies = getMovies.total_movies;

// Codigo para /en-cartelera
let enCartelera = "En cartelera\n\n";
enCartelera += "Total de peliculas: " + totalMovies;
enCartelera += "\n\nListado de peliculas: \n\n"

movies.forEach(function(titulo){
	enCartelera += titulo.original_title + "\n"
	enCartelera += titulo.overview + "\n\n"
});
module.exports = enCartelera;

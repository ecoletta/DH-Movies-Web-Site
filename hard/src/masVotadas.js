const fs = require('fs');

const getMovies = JSON.parse(fs.readFileSync('./data/movies.json','utf8'));
const movies = getMovies.movies;

// Codigo para /mas-votadas
let masVotadas = "Mas votadas \n\n"
masVotadas += "Listado de Peliculas mas votadas: \n\n" 
let moviesMasVotadas = movies.filter(function(puntaje){
    return puntaje.vote_average >= 7.5;
});

masVotadas += "Total de peliculas mas votadas: " + moviesMasVotadas.length + "\n\n";
moviesMasVotadas.forEach(function(titulo){
	masVotadas += titulo.title +"\n" ;
	masVotadas += titulo.vote_average +"\n" ;
	masVotadas += titulo.overview+"\n\n" ;
});
module.exports = masVotadas;

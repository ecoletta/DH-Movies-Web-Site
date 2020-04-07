const fs = require('fs');

const getMovies = JSON.parse(fs.readFileSync('./data/movies.json','utf8'));
const movies = getMovies.movies;
const totalMovies = getMovies.total_movies;
const pieDePagina = "Recorda que podes visitar las siguientes secciones: \n\n i.	En Cartelera\n ii.	Mas votadas\n iii.	Sucursales\n iv.	Contacto\n v.	Preguntas frecuentes\n";


// Codigo para /HOME
let homePage = "Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn. \n\n";
homePage += "Total de peliculas:" + totalMovies + "\n\n" + "Listado de peliculas: \n\n";

let moviesName = movies.map(function(original_title){
	return original_title.original_title
});
moviesName.forEach(function(titulo){
	homePage += titulo + "\n"
});
homePage += "\n" + pieDePagina;

module.exports = homePage;

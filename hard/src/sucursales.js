const fs = require('fs');

const getTheaters = JSON.parse(fs.readFileSync('./data/theaters.json','utf8'));

let theaters = getTheaters.theaters;
let totalTheaters = getTheaters.total_theaters;

// Codigo para /Sucursales
let sucursales = "Nuestras Salas \n\n" + "Total de salas: " + totalTheaters + "\n\n" + "Listado de Salas: \n\n";
theaters.forEach(function(titulo){
	sucursales += titulo.name +"\n" ;
	sucursales += titulo.address +"\n" ;
	sucursales += titulo.description +"\n\n" ;
});
module.exports= sucursales;
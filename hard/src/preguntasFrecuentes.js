const fs = require('fs');

const getFaqs = JSON.parse(fs.readFileSync('./data/faqs.json','utf8'));

let faqs = getFaqs.faqs;
let totalFaqs = getFaqs.total_faqs;

//Codigo para /preguntas-frecuentes
let preguntasFrecuentes = "Preguntas Frecuentes \n\n" + "Total de preguntas: " + totalFaqs + "\n\n" + "Listado de preguntas: \n\n"

faqs.forEach(function(titulo){
	preguntasFrecuentes += titulo.faq_title +"\n" ;
	preguntasFrecuentes += titulo.faq_answer +"\n\n" ;
});

module.exports = preguntasFrecuentes;
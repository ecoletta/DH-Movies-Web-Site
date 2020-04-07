const http = require('http');

const contacto = require('./src/contacto');
const enCartelera = require('./src/enCartelera');
const homePage = require('./src/homePage');
const index = require('./src/index');
const masVotadas = require('./src/masVotadas');
const preguntasFrecuentes = require('./src/preguntasFrecuentes');
const sucursales = require('./src/sucursales');


http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
		switch (req.url){
			case '/' :
				res.end('Bienvenidos');
				break;
			case '/contacto' :
				res.end(contacto);
				break;
			case '/en-cartelera' :
				res.end(enCartelera);
				break;
			case '/homePage' :
				res.end(homePage);
				break;
			case '/index' :
				res.end(index);
				break;
			case '/masVotadas' :
				res.end(masVotadas);
				break;
			case '/preguntasFrecuentes' :
				res.end(preguntasFrecuentes);
				break;
			case '/sucursales' :
				res.end(sucursales);
				break;
			default: 
				res.end("Pagina no encontrada:");
				break;
		}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));
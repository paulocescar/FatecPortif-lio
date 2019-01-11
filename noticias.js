var http = require('http');

var server = http.createServer(function(req, res){

	var categoria = req.url;

	if(categoria == '/tech'){
		res.end("<html><body>Tecnologias</body></html>");
	}else if(categoria == '/esporte'){
		res.end("<html><body>Esporte</body></html>");
	}else{
		res.end("<html><body>Portal de noticias</body></html>");
	}
});

server.listen(3000);
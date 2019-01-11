module.exports = function(app){
	//conexao com bd apartir da function do dbconnection
	app.get('/noticias', function(req, res){
		app.app.controllers.noticias.noticias(app, req, res);
	});

	//conexao com bd apartir da function do dbconnection
	app.get('/noticia', function(req, res){
		app.app.controllers.noticias.noticia(app, req, res);
	});
};
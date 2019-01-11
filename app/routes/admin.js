module.exports = function(app){
	//chamada no app (aplicação express) inclusao de caminhos de paginas
	//.render vem da biblioteca express
	app.get('/formulario_inclusao_noticia', function(req, res){
		app.app.controllers.admin.formularios_inclusao_noticias(app, req, res);
	});

	app.post('/noticias/salvar', function(req, res){
		app.app.controllers.admin.salvarNoticia(app, req, res);
	});
};

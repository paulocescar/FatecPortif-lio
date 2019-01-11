module.exports.noticias = function(app, req, res){
	//chamada de functions e models
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.noticiasDAO(connection);

		noticiasModel.getNoticias(function(erro, result){
			//render do EJS routes e {variavel notiticas para usar no noticias.ejs}
			res.render("noticias/noticias", {noticias : result});

		});
};

module.exports.noticia = function(app, req, res){
	//chamada de functions e models
		var connection = app.config.dbConnection();
		var noticiaModel = new app.app.models.noticiasDAO(connection);

		noticiaModel.getNoticia(function(erro, result){
			//render do EJS routes e {variavel notiticas para usar no noticias.ejs}
			res.render("noticias/noticia", {noticia : result});

		});
};
module.exports.formularios_inclusao_noticias = function(app, req, res){
	res.render("admin/form_add_noticia", {validar: {}, noticia: {}});
}

module.exports.salvarNoticia = function(app, req, res){
	var noticia = req.body;

		req.assert('titulo','titulo obrigatório').notEmpty();
		req.assert('descricao','descrição obrigatório').notEmpty();
		req.assert('resumo','resumo obrigatório').notEmpty();
		req.assert('resumo','resumo maior que 10 letras').len(10,100);
		req.assert('autor','autor obrigatório').notEmpty();
		req.assert('data','Data obrigatório').notEmpty();

		var erros = req.validationErrors();

		if(erros){
			
			res.render("admin/form_add_noticia", {validar: erros, noticia: noticia});
			return;
		}else{

		}

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.noticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia, function(erro, result){
			//render do EJS routes e {variavel notiticas para usar no noticias.ejs}
			res.redirect('/noticias');

		});
}
var app = require('./config/server');


//rotas para os aruiqvos HTML em EJS
//var rotaHome = require('./app/routes/home')(app);
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaFormNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

//cria o servidor na porta 3000 (aplicação express)
app.listen(3000, function(){
	console.log('server ONLINE');
});
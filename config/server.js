//instancia a biblioteca express
var express = require('express');

//chamando o modulo consign
var consign = require('consign');

//cria applicação do express
//chamada no app (aplicação express) inclusao de caminhos de paginas
var app = express();

//icluir o body parser
var bodyparser = require('body-parser');

//validador de campos 
var expressValidator = require('express-validator');

//propriedade do view engine do express para o EJS
app.set('view engine', 'ejs');
//setando caminho das views do server
app.set('views', './app/views');
//setando todas as rotas e conexao pelo consign de uma só vez

//adicionando body-parser no app
app.use(bodyparser.urlencoded({extended: true}));
app.use(expressValidator());


consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);
//consign().include('config/dbConnection.js').into(app);
//exporta a variavel app com suas atribuições para o lugar que o requerer
module.exports = app;
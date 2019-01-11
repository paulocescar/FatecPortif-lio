//chamada do modulo mysql
var mysql = require('mysql');

//conectando com mysql
var conMysql = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '',
			database : 'portal'
		});
}
	module.exports = function(app){
		//retorna variavel de conexao do bd
		return conMysql;
	}
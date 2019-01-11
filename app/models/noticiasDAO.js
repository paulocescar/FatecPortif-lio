function noticiasDAO(connection){
	this._connection = connection;
}

noticiasDAO.prototype.getNoticias = function(callback){
		this._connection.query('SELECT * FROM noticias', callback);
	}

noticiasDAO.prototype.getNoticia = function(callback){
		this._connection.query('select * from noticias where id_noticias = 0', callback);
	}

noticiasDAO.prototype.salvarNoticia = function(noticia, callback){
		this._connection.query('insert into noticias set ?', noticia, callback);
	}

module.exports = function(){

	

	return noticiasDAO;

}
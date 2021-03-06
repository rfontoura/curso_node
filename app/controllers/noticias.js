module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.NoticiasDAO(connection);

    console.log(req.query);
    var idNoticia = req.query;

    noticiaModel.getNoticia(idNoticia, function (error, result) {
        res.render('noticias/noticia', { noticia: result[0] });
    });
}

module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiaDAO = new application.app.models.NoticiasDAO(connection);

    noticiaDAO.getNoticias(function (error, result) {
        // no render(), o primeiro parâmetro é a view que vai renderizar o resultado
        // o segundo é a criação de um objeto que será passado para a view
        res.render('noticias/noticias', { noticias: result });
    });
}
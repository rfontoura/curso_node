module.exports = function (application) {

    application.get('/noticias', function (req, res) {
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (error, result) {
            // no render(), o primeiro parâmetro é a view que vai renderizar o resultado
            // o segundo é a criação de um objeto que será passado para a view
            res.render('noticias/noticias', { noticias: result });
        });
    });
}

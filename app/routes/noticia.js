module.exports = function (application) {
        application.get('/noticia', function (req, res) {
            var connection = application.config.dbConnection();
            var noticia = new application.app.models.NoticiasDAO(connection);

            noticia.getNoticia(function (error, result) {
                res.render('noticias/noticia', { noticia: result[0] });
            });
        });
    }
    
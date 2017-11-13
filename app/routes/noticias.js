var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {

    var connection = dbConnection();
    app.get('/noticias', function (req, res) {
        
        connection.query('SELECT * FROM noticias', function (error, result) {
            // no render(), o primeiro parâmetro é a view que vai renderizar o resultado
            // o segundo é a criação de um objeto que será passado para a view
            res.render('noticias/noticias', { noticias: result });
        });
    });
}

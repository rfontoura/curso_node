var mysql = require('mysql');

module.exports = function()  {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'portal_noticias'
    });
}
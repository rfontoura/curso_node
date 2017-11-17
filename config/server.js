var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); // também é um middleware

var app = express();
app.set('view engine', 'ejs');

// definição do caminho base das views
// como inclusão do módulo 'server' é feita no app, então o caminho é relativo ao 'app.js'
app.set('views', './app/views');

 // define como diretório estático o /app/public, com CSS, JS e o que mais for estático,
 // deixando-os disponíveis para as páginas
app.use(express.static('./app/public'));
// configuração do middleware body-parser para tratar urls codificadas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// utilizando o Consign para mapear as views no Express de forma rápida
consign()
    .include('app/routes')
    // ser apontar extensão, vai indicar arquivo específico. Se não indicar extensão,
    // vai pensar que é diretório com arquivos JS
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;
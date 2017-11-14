var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');

// definição do caminho base das views
// como inclusão do módulo 'server' é feita no app, então o caminho é relativo ao 'app.js'
app.set('views', './app/views');

// utilizando o Consign para mapear as views no Express de forma rápida
consign()
    .include('app/routes')
    // ser apontar extensão, vai indicar arquivo específico. Se não indicar extensão,
    // vai pensar que é diretório com arquivos JS
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;
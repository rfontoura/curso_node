var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// definição do caminho base das views
// como inclusão do módulo 'server' é feita no app, então o caminho é relativo ao 'app.js'
app.set('views', './app/views');

module.exports = app;
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

<<<<<<< HEAD
var app = express();
=======
var show = function(response) {
  var html = '<html><head><title>Todo Listan</title></head><body>'
           + '<h1>Todo List</h1>'
           + '<ul>'
           + items.map(function(item){
              return '<li>' + decodeURIComponent(item) + '</li>'
             }).join('')
           + '</ul>'
           + '<form method="post" action="/">'
           + '<p><input type="text" name="item" /></p>'
           + '<p><input type="submit" value="Add Item" /></p>'
           + '</form></body></html>';
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('Content-Length', Buffer.byteLength(html));
  response.end(html);
};
>>>>>>> 3ba54d7b40adc54aeaeffa8422aafe1661ff2859

app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.post('/todos', routes.create);
app.put('/todos/:id', routes.update);
app.delete('/todos/:id', routes.delete);

http.createServer(app).listen(app.get('port'), function() {
  console.log("Todo-app server listening on port " + app.get('port'));
});

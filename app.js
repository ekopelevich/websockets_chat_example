var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  console.log('Someone entered the chat room!');
});

app.get('/', function(req, res){
  res.render('index');
});

server.listen(3000, function(){
  console.log('Listening on port 3000');
});

module.exports = app;

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  socket.on('message', function(msg){
    io.emit('message', msg);
    console.log('message: ' + msg);
  });
});

// io.emit('some event', { for: 'everyone' });

app.get('/', function(req, res){
  res.render('index');
});



app.post('/msgs', function(req, res){

});

server.listen(3000, function(){
  console.log('Listening on port 3000');
});

module.exports = app;

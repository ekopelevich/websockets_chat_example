$(document).ready(function(){
  addSendListener();
});

var socket = io();

function addSendListener(){
  $('.send').click(function(event){
    event.preventDefault();
    var chatMsg = $('#m').val();
    sendMsg(chatMsg);
  });
}

function sendMsg(chatMsg){
  socket.emit('message', chatMsg);
  $('#m').val('');
  return false;
}

socket.on('message', function(chatMsg){
 $('#messages').append($('<li>').text(chatMsg));
});

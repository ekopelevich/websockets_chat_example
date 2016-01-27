$(document).ready(function(){
  addSendListener();
});

function addSendListener(){
  $('.send').click(function(event){
    event.preventDefault();
    var chatMsg = $('#m').val();
    displayMsg(chatMsg);
  });
}

function displayMsg(chatMsg){
  $('#messages').append('<li>' + chatMsg + '</li>');
}

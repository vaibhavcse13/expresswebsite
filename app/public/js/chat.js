var socket = io();

var chatForm = document.forms.chatForm; 
var usrName , usrMessage ;
usrName =  document.querySelector('#chat-username');
usrMessage = document.querySelector('#chat-message');
socket.on('connect' ,  function(){
    if(chatForm){
   
    
        chatForm.addEventListener('submit' , function(evt){
            evt.preventDefault(); 
            /* showMessage({
                "usrName" : usrName.value ,
                "usrMessage" : usrMessage.value
            }); */

            // emitting the message to the server 
            socket.emit('postMessage' ,{
                "usrName" : usrName.value ,
                "usrMessage" : usrMessage.value
            });
            usrMessage.value = '';
            usrMessage.focus();
        });
        //  capture the event from the server 
        socket.on('updateMessage' , function(data){
            showMessage(data);
        })
       
        
        function showMessage(data){
            var chatDisplay = document.querySelector('.chat-display');
            var newMessage = document.createElement('p');
            if(usrName.value === data.usrName){
                newMessage.className = 'bg-success chat-text';
            }else{
                newMessage.className = 'bg-info text-warning  chat-text';
            }
            
            newMessage.innerHTML = '<strong>' + data.usrName + '</strong> : ' + data.usrMessage  ;
            chatDisplay.insertBefore(newMessage , chatDisplay.firstChild);
        }    
    }
})

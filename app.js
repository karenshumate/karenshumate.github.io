var nameInput = document.getElementById('name');
var nameInput = document.getElementById('email');
var messageTextArea = document.getElementById('message');

var focusContact = event => {
  event.target.className =  'highlight';                       
  };
                          
                         
 var blurContact = event => {
  event.target.className =  '';                       
  };  

nameInput.addEventListener('focus', focusContact);
nameInput.addEventListener('blur', blurContact);

messageTextArea.addEventListener('focus', focusContact);
messageTextArea.addEventListener('blur', blurContact);

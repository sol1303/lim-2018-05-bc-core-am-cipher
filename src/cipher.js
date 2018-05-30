const codeButton = document.getElementById('ButtonCode')
const decodeButton = document.getElementById('ButtonDecode')

codeButton.addEventListener('click', function(){
  debugger
const string = document.getElementById('message').value;
const space = document.getElementById('number').value;
let output = '';
const offset = parseInt(space);
  for(var i = 0; i < string.length; i++) {
        let ascii = string.charCodeAt(i);
        if(ascii >= 97 && ascii <= 122) {
            output += String.fromCharCode((ascii - 97 + offset) % 26 + 97);
        } 
        else if(ascii >= 65 && ascii <= 90) {
            output += String.fromCharCode((ascii - 65 + offset) % 26 + 65);
        }
        else {
          output += String.fromCharCode(ascii)
        }
    }
        document.getElementById('answer').innerHTML= offset + ' - ' + output;
    });


decodeButton.addEventListener('click', function(){
  debugger
  const string = document.getElementById('messageTwo').value;
  const space = document.getElementById('numberTwo').value;
  let output = '';
  const offset = parseInt(space);
  for(var i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);
    if(ascii >= 97 && ascii <= 122) {
        output += String.fromCharCode((ascii - 97 - offset + 26) % 26 + 97);
    } 
    else if(ascii >= 65 && ascii <= 90) {
        output += String.fromCharCode((ascii - 65 - offset + 26) % 26 + 65);
    } 
    else {
      output += String.fromCharCode(ascii)
    document.getElementById('answerTwo').innerHTML= output;
}
}})

window.cipher = {

};

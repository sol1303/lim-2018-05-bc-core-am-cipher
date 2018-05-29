var code = document.getElementById('start')
var decode = document.getElementById('startTwo')
var show = document.getElementById('instructions')
var showTwo = document.getElementById('instructionsTwo')
var codeButton = document.getElementById("ButtonCode")
var decodeButton = document.getElementById("ButtonDecode")

code.addEventListener("click", function(){
  show.style.display= "";
  code.style.display= "none";
  decode.style.display= "none";
});
codeButton.addEventListener("click", function(){
  debugger
var string = document.getElementById("message").value;
var space = document.getElementById("number").value;
var output = "";
var offset = parseInt(space);
  for(var i = 0; i < string.length; i++) {
        var ascii = string.charCodeAt(i);
        if(ascii >= 97 && ascii <= 122) {
            output += String.fromCharCode((ascii - 97 + offset) % 26 + 97);
        } else if(ascii >= 65 && ascii <= 90) {
            output += String.fromCharCode((ascii - 65 + offset) % 26 + 65);
        }
    }
        document.getElementById("answer").innerHTML= offset + " - " + output;
    });

decode.addEventListener("click", function(){
    debugger
    showTwo.style.display= "";
    code.style.display= "none";
    decode.style.display= "none";
});
decodeButton.addEventListener("click", function(){
  debugger
  var string = document.getElementById("messageTwo").value;
  var space = document.getElementById("numberTwo").value;
  var output = "";
  var offset = parseInt(space);
  for(var i = 0; i < string.length; i++) {
    var ascii = string.charCodeAt(i);
    if(ascii >= 97 && ascii <= 122) {
        output += String.fromCharCode((ascii - 97 - offset + 26) % 26 + 97);
    } else if(ascii >= 65 && ascii <= 90) {
        output += String.fromCharCode((ascii - 65 - offset + 26) % 26 + 65);
    } 
    document.getElementById("answerTwo").innerHTML= output;
}
})
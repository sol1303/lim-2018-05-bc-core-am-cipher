var code = document.getElementById("start")
var decode = document.getElementById("startTwo")
var show = document.getElementById("instructions")
var showTwo = document.getElementById("instructionsTwo")
var codeButton = document.getElementById("ButtonCode")
var decodeButton = document.getElementById("ButtonDecode")

code.addEventListener("click", function(){
    show.style.display= "";
    code.style.display= "none";
    decode.style.display= "none";
});
codeButton.addEventListener("click", function(){
    debugger
var cipherMessage = document.getElementById("message").value.toLowerCase();
var space = document.getElementById("number").value;
var output = "";
var cipherNumber = parseInt(space);
    for (var i = 0; i < cipherMessage.length; i++) {
        numberLetter = cipherMessage.charCodeAt(i);
    if (numberLetter == 32){
        output += " ";
    }
    else  {
        change = numberLetter + cipherNumber;
        if (change <= 122 && change >= 97) {
        output += String.fromCharCode(change);
        }
        else  {
            changeTwo = (((change - 97)%26)+97);
            output += String.fromCharCode(changeTwo);
        }
        document.getElementById("answer").innerHTML= space + " - " + output;
    }
}
});

decode.addEventListener("click", function(){
    debugger
    showTwo.style.display= "";
    code.style.display= "none";
    decode.style.display= "none";
});
decodeButton.addEventListener("click", function(){
    debugger
    var cipherMessage = document.getElementById("messageTwo").value.toLowerCase();
    var space = document.getElementById("numberTwo").value;
    var output = "";
    var cipherNumber = parseInt(space);
        for (var i = 0; i < cipherMessage.length; i++) {
            numberLetter = cipherMessage.charCodeAt(i);
        if (numberLetter == 32){
            output += " ";
          }
        else (numberLetter <= 122 && numberLetter >= 97)
                if ((cipherMessage.charCodeAt(i)-cipherNumber) < 97){
                difference=(97-(numberLetter-cipherNumber%26));
                output += String.fromCharCode(123 - difference)
                }
                else {
                    output += String.fromCharCode(cipherMessage.charCodeAt(i)-cipherNumber%26);
                }   
                document.getElementById("answerTwo").innerHTML= space + " - " + output;
            }
        });

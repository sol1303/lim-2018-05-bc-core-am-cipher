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
codeButton.addEventListener("click", function(){
var cipherMessage = document.getElementById("message").value.toLowerCase();;
var space = document.getElementById("number").value;
var cipherAnswer = document.getElementById("answer");
var output = "";
var cipherNumber = parseInt(space);
    for (var i = 0; i < cipherMessage.length; i++) {
        debugger
         numberLetter = (cipherMessage.charCodeAt(i) + cipherNumber)
    if (numberLetter <= 90 && numberLetter >= 65 || numberLetter <= 122 && numberLetter >= 97 || numberLetter == 33) {
            output += String.fromCharCode(numberLetter);
        }
    else {
            numberLetter2 = (((numberLetter - 97)%26)+97)
              output += String.fromCharCode(numberLetter2)
          }
    }
        document.getElementById("answer").innerHTML= space + " - " + output;
})});

decode.addEventListener("click", function(){
    //debugger
    showTwo.style.display= "";
    code.style.display= "none";
    decode.style.display= "none";
decodeButton.addEventListener("click", function(){
    var cipherMessageTwo = document.getElementById("messageTwo").value.toLowerCase();;
    var spaceTwo = document.getElementById("numberTwo").value;
    var cipherAnswerTwo = document.getElementById("answerTwo");
    var outputTwo = "";
    var cipherNumberTwo = parseInt(spaceTwo);
        for (var i = 0; i < cipherMessageTwo.length; i++) {
             numberLetterTwo = (cipherMessageTwo.charCodeAt(i)-cipherNumberTwo)
        if (numberLetterTwo <= 90 && numberLetterTwo >= 65 || numberLetterTwo <= 122 && numberLetterTwo >= 97 || numberLetterTwo == 32) {
                outputTwo += String.fromCharCode(numberLetterTwo);
            } 
        else {
                numberLetterThree = (((numberLetter - 65)%26)+65)
                  output += String.fromCharCode(numberLetterThree)
              }
            }
            document.getElementById("answerTwo").innerHTML= spaceTwo + " - " + outputTwo;
})});
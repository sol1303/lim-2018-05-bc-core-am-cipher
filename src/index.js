var button = document.getElementById("ButtonCode")


button.addEventListener("click", function(){
    var Space = document.getElementById("number")
    var CipherSpace = Space.value
    var CipherMessage = document.getElementById("message")
    var CipherCaesar = CipherMessage.value
    document.getElementById("answer").innerHTML = CipherSpace + " - " + CipherCaesar
});

var button = document.getElementById("ButtonDecode")


button.addEventListener("click", function(){
    var Space = document.getElementById("number")
    var CipherSpace = Space.value
    var CipherMessage = document.getElementById("message")
    var CipherCaesar = CipherMessage.value
    document.getElementById("answer").innerHTML = CipherSpace + " - " + CipherCaesar
});
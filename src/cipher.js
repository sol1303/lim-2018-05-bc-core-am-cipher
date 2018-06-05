window.cipher = {
  encode(offset, string) {
    let output = '';
    for(var i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      if(ascii >= 65 && ascii <= 90) {
        output += String.fromCharCode(((ascii - 65 + offset)%26) + 65);
      } else if(ascii >= 97 && ascii <= 122) {
        output += String.fromCharCode(((ascii - 97 + offset)%26) + 97);
      }
      else {
        output += String.fromCharCode(ascii)
      }
  }
      return output;
  },
  
  decode(offset, string) {
    let output = '';
    for(var i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);
      if(ascii >= 65 && ascii <= 90) {
        if(ascii - offset < 65 && ascii - offset % 26 < 65) {
        output += String.fromCharCode(91- (65 - (ascii - offset%26 )));
      }
        else {
        output += String.fromCharCode(ascii - offset % 26);
    } 
  } else if(ascii >= 97 && ascii <= 122) {
    if(ascii - offset < 97 && ascii - offset % 26 < 97) {
    output += String.fromCharCode(123- (97 - (ascii - offset%26 )));
  }
    else {
    output += String.fromCharCode(ascii - offset % 26);
}
  } else {
    output += String.fromCharCode(ascii)
  }
}
return output;
},
createCipherWithOffset () {

}
}
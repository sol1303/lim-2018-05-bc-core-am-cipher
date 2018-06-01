window.cipher = {

  encode(offset, string) {
    let output = '';
    for(var i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      if(ascii >= 65 && ascii <= 90) {
        output += String.fromCharCode(((ascii - 65 + offset)%26) + 65);
      } else {
        output += String.fromCharCode(ascii);
          }
  }
      return output;
  },
  
  decode(offset, string) {
    let output = '';
    for(var i = 0; i < string.length; i++) {
    let numberAscii = string.charCodeAt(i);
      if(numberAscii >= 65 && numberAscii <= 90) {
        output += String.fromCharCode(((((numberAscii - 65) + 26) % 26) - offset) + 65);
      }  else {
        output += String.fromCharCode(numberAscii);
      }
  }
    return output;
  },

  createCipherWithOffset () {

  }
  }
  
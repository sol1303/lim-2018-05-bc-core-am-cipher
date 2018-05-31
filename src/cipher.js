window.cipher = {

encode(offset, string) {
  let output = '';
  for(var i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i);
    if(ascii >= 97 && ascii <= 122) {
      output += String.fromCharCode((ascii - 97 + offset) % 26 + 97);
      } 
    else if(ascii >= 65 && ascii <= 90) {
      output += String.fromCharCode((ascii - 65 + offset) % 26 + 65);
    }
    else {
      output += String.fromCharCode(ascii);
        }
}
    return output;
},

decode(offset, string) {
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
      output += String.fromCharCode(ascii);
    }
}
    return output;
}
}
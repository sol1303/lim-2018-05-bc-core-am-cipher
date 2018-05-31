const encodeButton = document.getElementById('start')
const decodeButton = document.getElementById('startTwo')
const show = document.getElementById('instructions')
const showTwo = document.getElementById('instructionsTwo')
const encode = document.getElementById('ButtonCode')
const decode = document.getElementById('ButtonDecode')

encodeButton.addEventListener('click', () => {
    show.style.display= '';
    encodeButton.style.display= 'none';
    decodeButton.style.display= 'none';
  });
encode.addEventListener('click', () => {
  let string = document.getElementById('message').value;
  let offset = document.getElementById('number').value;
  document.getElementById('answer').innerHTML =offset + ' - ' + cipher.encode(offset, string);
})

decodeButton.addEventListener('click', () => {
    showTwo.style.display= '';
    encodeButton.style.display= 'none';
    decodeButton.style.display= 'none';
});
decode.addEventListener('click', () => {
  let string = document.getElementById('messageTwo').value;
  let offset = document.getElementById('numberTwo').value;
  document.getElementById('answer').innerHTML = cipher.decode(offset, string);
})
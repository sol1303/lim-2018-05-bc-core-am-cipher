document.getElementById('start').addEventListener('click', () => {
  document.getElementById('instructions').style.display= '';
  document.getElementById('start').style.display= 'none';
  document.getElementById('startTwo').style.display= 'none';
  });
  document.getElementById('ButtonCode').addEventListener('click', () => {
  let string = document.getElementById('message').value;
  let offset = document.getElementById('number').value;
  document.getElementById('answer').innerHTML =offset + ' - ' + cipher.encode(offset, string);
})

document.getElementById('startTwo').addEventListener('click', () => {
  document.getElementById('instructionsTwo').style.display= '';
  document.getElementById('start').style.display= 'none';
  document.getElementById('startTwo').style.display= 'none';
});
document.getElementById('ButtonDecode').addEventListener('click', () => {
  let string = document.getElementById('messageTwo').value;
  let offset = document.getElementById('numberTwo').value;
  document.getElementById('answer').innerHTML = cipher.decode(offset, string);
})
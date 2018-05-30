const code = document.getElementById('start')
const decode = document.getElementById('startTwo')
const show = document.getElementById('instructions')
const showTwo = document.getElementById('instructionsTwo')


code.addEventListener('click', function(){
    show.style.display= '';
    code.style.display= 'none';
    decode.style.display= 'none';
  });

decode.addEventListener('click', function(){
    showTwo.style.display= '';
    code.style.display= 'none';
    decode.style.display= 'none';
});
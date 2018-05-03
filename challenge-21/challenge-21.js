(function(win, doc) {
  'use stricts'

  /*
  O desafio de hoje será um pequeno projeto: um cronômetro!
  As regras para criação do cronômetro são as seguintes:
  1. Crie um arquivo index.html e adicione esse script a ele;
  2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
  Ele será o nosso cronômetro;
  3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
  4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
  cada segundo;
  5. Ao clicar em Stop, o cronômetro deve parar de contar;
  6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

  Utilize o atributo data-js para nomear o campo e os botões. Você pode
  usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
  dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
  */


  var counter = 1;
  var $btnStop = doc.querySelector('[data-js="btn-stop"]');
  var $btnStart = doc.querySelector('[data-js="btn-start"]');
  var $btnReset = doc.querySelector('[data-js="btn-reset"]');
  var temp;
  $contador = doc.querySelector('input[type=text]');


  function timer() {
    $contador.value = counter++;
    //console.log(counter++, ' sec');
    temp = setTimeout(timer, 1000);
  };
  timer();

  $btnStop.addEventListener('click', function() {
    clearTimeout(temp);

  });

  $btnStart.addEventListener('click', function() {
    timer();
  });

  $btnReset.addEventListener('click', function() {
    clearTimeout(temp);
    counter = 0;
    $contador.value = counter;


  });






})(window, document);

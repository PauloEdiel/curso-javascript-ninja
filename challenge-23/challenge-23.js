(function(win, doc) {
  'use stricts';

  /*
  Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
  As regras são:

  - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
  diretamente;
  - O input deve iniciar com valor zero;
  - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
  - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
  multiplicação(x) e divisão(÷);
  - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
  que irá limpar o input, deixando-o com valor 0;

  - A cada número pressionado, o input deve atualizar concatenando cada valor
  digitado, como em uma calculadora real;
  - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
  operação no input. Se o último caractere no input já for um símbolo de alguma
  operação, esse caractere deve ser substituído pelo último pressionado.
  Exemplo:
  - Se o input tem os valores: "1+2+", e for pressionado o botão de
  multiplicação (x), então no input deve aparecer "1+2x".
  - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
  input;
  - Ao pressionar o botão "CE", o input deve ficar zerado.
  */

  // Variávieis
  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonsOperation = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonIgual = doc.querySelector('[data-js="button-igual"]');

  //Captura dos Eventos
  $buttonCE.addEventListener('click', handleClickCE, false);
  $buttonIgual.addEventListener('click', handleClickIgual, false);

  Array.prototype.forEach.call($buttonsNumbers, function(button) {
    button.addEventListener('click', handleClickNumber, false)
  });

  Array.prototype.forEach.call($buttonsOperation, function(button) {
    button.addEventListener('click', handleClickOperation, false)
  });


  //Funções Butões
  function handleClickNumber(event) {
    $visor.value += (this.value);
  }

  function handleClickCE(event) {
    $visor.value = 0;
  }

  function handleClickOperation(event) {
    removeLastItemIfItIsAnOperator();
    $visor.value += this.value;
  }

  function handleClickIgual(event) {
    removeLastItemIfItIsAnOperator();
    var allValues = ($visor.value.match(/(?:\d+)[+x÷-]?/g));
    $visor.value = allValues.reduce(function(accumulated, actual) {
      var firstValue = (accumulated.slice(0, -1));
      var operator = accumulated.split('').pop();
      var lastValue = actual;
      switch (operator) {
        case '+':
          return Number(firstValue) + Number(lastValue);
        case '-':
          return Number(firstValue) - Number(lastValue);;
        case '÷':
          return Number(firstValue) / Number(lastValue);;
        case 'x':
          return Number(firstValue) * Number(lastValue);;
      }


    });
    //console.log(result);
  }

  //Demais funções
  function removeLastItemIfItIsAnOperator() {
    if (isLastItemAnOperation()) {
      $visor.value = $visor.value.slice(0, -1);
    }
  }

  function isLastItemAnOperation() {
    var operations = ['+', '-', '÷', 'x'];
    var lastItem = $visor.value.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }




})(window, document);
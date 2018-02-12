# Desafio da semana #4
    var isTruthy = function(args){
      if (!! args) {
        return true;
      }else {
        return false;
      }


    };

    // Invoque a função criada acima, passando todos os tipos de valores `falsy`.
  isTruthy(null);
  isTruthy(undefined);
  isTruthy(0);
  isTruthy(null);
  isTruthy("");
  isTruthy(false);

    /*
    Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
    */
    isTruthy(1);
    isTruthy("Paulo");
    isTruthy([4,5])
    isTruthy([]);
    isTruthy([4.5]);
    isTruthy(true);
    isTruthy({bola:"AZUL"});
    isTruthy(function() {} );
    isTruthy(25);
    isTruthy("Js é foda!");


    /*
    Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
    seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
    - `marca` - String
    - `modelo` - String
    - `placa` - String
    - `ano` - Number
    - `cor` - String
    - `quantasPortas` - Number
    - `assentos` - Number - cinco por padrão
    - `quantidadePessoas` - Number - zero por padrão
    */

    var carro = {
      marca:"Honda",
      modelo:"HRV",
      placa:"FAJ-0028",
      ano:2016,
      cor:"Prata",
      quantasPortas:4,
      assentos:5,
      quantidadePessoas:0
    }


    /*
    Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
    passado por parâmetro.
    */
    carro.mudarCor = function(collor){
      carro.cor = collor;
    };


    /*
    Crie um método chamado `obterCor`, que retorne a cor do carro.
    */
    carro.obterCor = function(){
      return "Cor do carro:"+carro.cor;
    };

    /*
    Crie um método chamado `obterModelo` que retorne o modelo do carro.
    */
    carro.obterModelo = function(){
      return carro.modelo;
    } ;

    /*
    Crie um método chamado `obterMarca` que retorne a marca do carro.
    */
    carro.obterMarca = function(){
      return "Cor do carro:"+carro.marca;
    };

    /*
    Crie um método chamado `obterMarcaModelo`, que retorne:
    "Esse carro é um [MARCA] [MODELO]"
    Para retornar os valores de marca e modelo, utilize os métodos criados.
    */
      carro.obterMarcaModelo = function(){
        return "Esse carro é um "+carro.marca+" "+carro.obterModelo();
      };

    /*
    Crie um método que irá adicionar pessoas no carro. Esse método terá as
    seguintes características:
    - Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
    número não precisa encher o carro, você poderá acrescentar as pessoas aos
    poucos.
    - O método deve retornar a frase: "Já temos [X] pessoas no carro!"
    - Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
    deve retornar a frase: "O carro já está lotado!"
    - Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
    parâmetro for ultrapassar o limite de assentos do carro, então você deve
    mostrar quantos assentos ainda podem ser ocupados, com a frase:
    "Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
    - Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
    citado acima, no lugar de "pessoas".
    */
      carro.addPessoas = function(totPessoas){
        if (carro.assentos <= carro.quantidadePessoas)   {
            return "O carro já está lotado!";
        }else if ((carro.assentos - carro.quantidadePessoas) === 1) {
          return "Só cabe mais "+(carro.assentos - carro.quantidadePessoas)+" pessoa!"
        }else if ((carro.assentos - carro.quantidadePessoas) < totPessoas) {
          return "Só cabem mais "+(carro.assentos - carro.quantidadePessoas)+" pessoas!"
        }else {
          carro.quantidadePessoas +=totPessoas;
          console.log(totPessoas+" pessoas Entraram no carro");
        }
        return "Já temos "+ carro.quantidadePessoas +" pessoas no carro!";


      }

    /*
    Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
    utilize sempre o formato de invocação do método (ou chamada da propriedade),
    adicionando comentários _inline_ ao lado com o valor retornado, se o método
    retornar algum valor.

    Qual a cor atual do carro
    */
    carro.obterCor(); //"Cor do carro:Prata"

    // Mude a cor do carro para vermelho.
      carro.mudarCor('vermelho');

    // E agora, qual a cor do carro
    carro.obterCor(); //"Cor do carro:vermelho"


    // Mude a cor do carro para verde musgo.
      carro.mudarCor('verde musgo');

    // E agora, qual a cor do carro
    carro.obterCor(); // "Cor do carro:verde musgo"

    // Qual a marca e modelo do carro
    carro.obterMarcaModelo();//"Esse carro é um Honda HRV"


    // Adicione 2 pessoas no carro.
    carro.addPessoas(2);
    //2 pessoas Entraram no carro
    //"Já temos 2 pessoas no carro!"

    // Adicione mais 4 pessoas no carro.
    carro.addPessoas(4);
    //"Só cabem mais 3 pessoas!"


    // Faça o carro encher.
    carro.addPessoas(3);// 3 pessoas Entraram no carro


    // Tire 4 pessoas do carro.
    carro.retirarPessoas = function(pessoas){
      carro.quantidadePessoas  -= pessoas;
      console.log(pessoas+" pessoas sairam no carro");
      return "Já temos "+ carro.quantidadePessoas +" pessoas no carro!";


      }



    // Adicione 10 pessoas no carro.
    carro.addPessoas(10); //"Só cabem mais 3 pessoas!"


    // Quantas pessoas temos no carro
    carro.quantidadePessoas; //2

    /*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [10,20,30,40,50,60];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebeArr(array){
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(recebeArr(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayNum(array,num){
  return array[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var meuArray = [1,"Paulo",{bola:'azul'},function(){},true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
for (var i = 0; i < meuArray.length; i++) {
  console.log(arrayNum(meuArray,[i]));
}
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livro){
  var allBooks = {
    'Java 8': {
      quantidadePaginas:325,
      autor:'Paulo',
      editora:"js ninja"},
    'JS Ninja': {
      quantidadePaginas:241,
      autor:'Terry Bogard',
      editora:"The king"},
    'Css Pratico': {
      quantidadePaginas:145,
      autor:'Iori Yagami',
      editora:"Livros Top"}
  };
   return !livro ? allBooks:allBooks [livro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

livro ='JS Ninja';
paginas = book(livro).quantidadePaginas;
console.log('O livro '+livro+' tem '+paginas+' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

autor = book(livro).autor;
console.log("O autor do livro "+livro+" é "+autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

editora = book(livro).editora;
console.log("O livro "+livro+" foi publicado pela editora "+editora);

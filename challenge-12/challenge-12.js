(function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    var person = {name:'paulo',lastname:'Silva',age:31}
    console.log( 'Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys(person));
    console.log(person);

    /*
    Crie um array vazio chamado `books`.
    */
    var books=[];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({name:'Js ninja',pages:635},{name:'Java é foda',pages:425},{name:'CSS na prática',pages:137});

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    console.log(books.pop(books));

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    strLivros=JSON.stringify(books);
    console.log( '\nLivros em formato string: \n'+strLivros );



    /*
    Mostre os livros nesse formato no console:
    */
    var books=JSON.parse(strLivros);
    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log( '\nAgora os livros são objetos novamente:' );
    //console.log(books);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var i = 0; i < books.length; i++) {
      for (var prop in books[i]) {
        console.log('Propriedades '+prop+' : '+books[i][prop]);
      }
    }

    /*
    seu nome. Adicione seu nome completo no array.
    */
    var nome = ['P','a','u','l','o'];

    console.log( '\nMeu nome é:' );



    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(nome.join(''));

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(nome.reverse());

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(nome.sort());
}());

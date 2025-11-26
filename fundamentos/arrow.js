// function subtracao(a, b) {
//     return console.log(a - b);
// }

// function somar2(a) {
//     return console.log(a + 2);
// }

// function diaDoMes() {
//     return console.log(new Date().getDate());
// }

// pesquisa na internet

// Oque é uma arrow function (função de flecha)?
// uma arrow function é uma maneira mais curta e moderna de escrever funções, 
// só que com algumas regras próprias. Veremos nos exemplos abaixo:

// Função tradicional/normal
function soma(a, b) {
    return a + b;
}

// arrow function equivalente
const soma = (a, b) => {
    return a + b;
}

// arrow function ainda mais curta (a função vai retornar somente uma expressão).
const somas = (a, b) => a + b; // neste caso o return é implicito. Não precisa escrever return nem utilizar chaves {};

// quando for somente um parâmetro, não necessita de parênteses.
const dobrar = x => x * 2;

// quando for retornar um objeto literal: cuidado com os parênteses

// Se você escrever => { key: 'valor' } => isso é bloco, não retorno de objeto
// Para retornar um objeto literal, envolva em parênteses:
const criaPessoa = (nome, idade) => ({ nome: nome, idade: idade });
// ou usando shorthand de objeto:
const criaPessoa2 = (nome, idade) => ({ nome, idade });

// lexical this
const obj = {
  nome: 'Maria',
  dizerNomeTradicional: function() {
    console.log(this.nome); // 'Maria' — funciona
  },
  dizerNomeArrow: () => {
    console.log(this.nome); // undefined (ou outra coisa) — porque `this` NÃO é o obj
  }
};

obj.dizerNomeTradicional(); // 'Maria'
obj.dizerNomeArrow();       // undefined (ou window.nome em browser sem 'use strict')


// Arrow functions não possuem arguments (variável especial), para isso, utilize rest parameters:
const somaTudo = (...nums) => nums.reduce((s, n) => s + n, 0);

// Arrow functions não podem ser usadas como construtoras (ou seja, não podem usar new)
const Pessoa = (nome) => { this.nome = nome; };
const p = new Pessoa('João'); // ERRO: Pessoa is not a constructor

// As arrows são ótimas para funções pequenas, callbacks e transformações curtas (map, filter, reduce);
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2);

// Exemplo 1 - Callback curto (ideal para arrows)
const nomes = ['ana', 'bruno', 'carlos'];
const maiusculos = nomes.map(n => n.toUpperCase());

// Exemplo 2 - this em função tradicional vs arrows em classes (comum em React)
class Contador {
  constructor() {
    this.count = 0;
    // this.increment = this.increment.bind(this); // usando function tradicional precisa bind
  }

  increment() { // método tradicional
    this.count++;
  }

  incrementArrow = () => { // usando sintaxe de campo (class field) com arrow
    this.count++;
  };
}

// Exemplo 3 - Retorno implícito vs bloco
  // retorno implícito
  const soma = (a, b) => a + b;

  // bloco (precisa de return)
  const soma2 = (a, b) => {
    const resultado = a + b;
    return resultado;
  };

// Exemplo 4 - Não existe arguments
const f = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};

// use rest
const g = (...args) => {
  console.log(args); // array com os argumentos
};

// armadilhas comuns (para ficar de olho)

// 1. Usar arrow como método de objeto - This não será o objeto:

// Errado:
const obj = {
  valor: 10,
  pegaValor: () => this.valor // this não aponta para obj
};

// Certo
const obj = {
  valor: 10,
  pegaValor() { return this.valor; } // ou pegaValor: function() {}
};


// 2. Retornar objeto literal sem parênteses - interpreta como bloco:

// Errado:
const f = () => { x: 1 }; // undefined

// Certo:
const f = () => ({ x: 1 });

// 4. Confundir this do lexicográfico com bind — bind, call, apply não mudam o this de uma arrow; this é fixo lexicamente:
const arrow = () => console.log(this);
arrow.call({x:1}); // não modifica `this`

// Exemplos reais de uso: úteis no dia-a-dia

// 1. Filtrar e mapear arrays
const produtos = [
  { nome: 'Caneta', preco: 2 },
  { nome: 'Caderno', preco: 15 },
  { nome: 'Borracha', preco: 1 }
];

const caros = produtos.filter(p => p.preco > 5).map(p => p.nome);

// 2. Promises e async/await com arrow
const buscarDados = async () => {
  try {
    const resp = await fetch('https://api.exemplo.com/dados');
    const json = await resp.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

// 3. Usando rest parameters
const somaTudo = (...nums) => nums.reduce((s, n) => s + n, 0);
somaTudo(1, 2, 3, 4); // 10

// Dúvidas frequentes: Posso usar arrow em classes como métodos?
// R: com class fields (sintaxe moderna) você pode definir métodos como arrow
// para preservar this, por exemplo:
class A {
  metodo = () => { console.log(this); }
} // mas saiba que isso define a função por instância (não no prototype)

// Exercício 1: Converta a função abaixo para arrow function com retorno implícito:
const quadrado = (x) => {x * x};

const quadrado = (x) => x * x; // resposta certa

// Lista com 10 questões

// Exercício 1: converter função para um arrow com retorno implícito
const metade = (n) => n / 2;

// Exercício 2:Crie uma arrow function chamada saudar que recebe um nome e retorna: "Olá, <nome>!"
const saudar = (nome) => `Olá, ${nome}`;

// Exercício 3: Crie uma arrow function chamada ehPar que recebe um número e retorna true se ele for par e false caso contrário (use retorno implícito).
const ehPar = (numero) => (numero % 2 == 0) ? true : false ;

// Exercício 4: Usando arrow functions, pegue o array abaixo e retorne um NOVO array contendo os números multiplicados por 3:
const numeros = [2, 4, 6, 8];

const multiplicados = numeros.map(n => n * 3);

// Exercício 5: Crie uma arrow function que recebe um array de nomes e retorna apenas os nomes que têm mais de 5 letras. Use .filter().
const verificacao = (nomes) => nomes.filter(n => n.length > 5);

// resposta exercício 5: o filter já é suficiente para este cenário

// Exercício 6: Transforme esta função tradicional em arrow function:

// função tradicional:
function contarVogais(str) {
  let count = 0;
  for (let char of str) {
    if ('aeiouAEIOU'.includes(char)) {
      count++;
    }
  }
  return count;
}

// minha resposta:
const contarVogais = (str) => str.map(s => (s.indexOf(s)) ? ""); // não consegui chegar em uma conclusão

// resposta exercício 6:
const contarVogais = str =>
  [...str].filter(c => "aeiouAEIOU".includes(c)).length;


// Exercício 7: Use apenas arrow functions para criar uma função chamada somaTudo que recebe qualquer quantidade de números e retorna a soma
const somaTudo = (...nums) => nums.reduce((s, n) => s + n, 0);

// Exercício 8: Crie uma função arrow chamada criarContador que retorna um objeto com dois métodos:
const criarContador = {
  contador: contador,
  incrementar: function() {
    contador++;
  }, 
  valor: function() {
    return this.contador;
  }
}

// resposta exercício 8: Erros:

// contador não existe → ReferenceError.

// O exercício pediu uma função que RETORNA um objeto, você criou diretamente um objeto.

// incrementar modifica contador global e não this.contador.

// Ele deve usar closure (mas isso será útil no exercício 10).

// resposta correta:
const criarContador = () => {
  let contador = 0;
  
  return {
    incrementar: () => contador++,
    valor: () => contador
  };
};


// Exercício 9: Explique o que será impresso e depois reescreva a função pegarValor usando function tradicional para funcionar corretamente:
// R: o código arrow dará errado pois a tentativa de criar a função está com erro de sintaxe, onde o provável retorno
// que terá quando a função for chamada será undefined

// resposta correta 9:
const obj = {
  valor: 10,
  pegarValor: function() {
    return this.valor;
  }
};

// minha resposta (função tradicional): 
class valor {

  valor = 0;

  function pegarValor(valor) {
    this.valor += valor;
    return console.log(valor.pegarValor());
  }
}

// Exercício 10: Crie uma função arrow chamada criarSomador que funciona assim:

// R: Eu consigo imaginar a lógica, porém não consigo escrever, por conta de que não sei oque são closures,
// peço que você me explique oque é uma closure, e eu realizo a tentativa de resolver o exercício. Por conta disso, não mostre a resposta
// deste exercício.

// resposta correta 10: 
const criarSomador = (x) => {
  return (y) => x + y;
};
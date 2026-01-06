// Anotações: estudos sobre operadores spread/rest

// Rest: utilizado para permitir que uma função receba um número indefinido de parâmetros.
// Essa representação é feita na forma de um array.

// Spread: permite definir um número indefinido de parâmetros para uma função, array ou objeto.

// Exemplo Rest:
function listagem (primeiro, segundo, ...outros) {
    console.log(`Na lista estão: $, $. Os demais são: ${outros.join(', ')}.`)
  }

listagem('Pedro', 'Maria', 'João', 'Marcus', 'Tiago')
// Na lista estão: Pedro, Maria. Os demais são: João, Marcus, Tiago.


// Exemplo Spread:
const pessoas = ['Pedro', 'Maria', 'João']

const todasAsPessoas = [ ...pessoas, 'Marcus', 'Tiago']

console.log(todasAsPessoas)
// [ 'Pedro', 'Maria', 'João', 'Marcus', 'Tiago' ]


// Exemplo 1 - Rest:
function soma (...valores) {
    var total = 0

    for (const item of valores) {
      total += parseInt(item, 10)
    }

    return total
  }

console.log(soma(1, 2, 3, 4, 50, 10, 23))
// 93

// O uso das reticencias indica que todos os valores passados por parâmetros serão passados para a função como a variável valores que contem um Array de valores.


// Exemplo 2 - Rest
function getArgumentos (valor1, ...outrosValores) {
    return {
      valor1,
      outrosValores
    }
  }

console.log(getArgumentos('DevMedia', 'curte', 'Javascript'))
// { valor1: 'DevMedia', outrosValores: [ 'curte', 'Javascript' ] }


// Exemplo 3 - Rest
// Considere que temos uma lista de produtos e seja necessário efetuar a soma de todos os itens passados como argumento da função.

const produtos = [
    { descricao: 'Papel Ofício', quantidade: 10, valor: 10.50 },
    { descricao: 'Lapis preto', quantidade: 20, valor: 0.50 }
  ]

function total (...produtos) {
return produtos
    .map(produto => produto.quantidade * produto.valor)
    .reduce((a, b) => a + b, 0)
}

console.log(total(...produtos))

// Perceba que o map foi utilizado para percorrer os itens do Array de produtos convertendo cada item em um numero a partir da soma da quantidade e valor dos produtos.


// Exemplo 1: Spread em chamadas de função
const soma = (a, b) => a + b

const valores = [ 10, 50 ]

console.log(soma(...valores)) // saída: 60


// Exemplo 2: Concatenação de arrays
const primeirosItens = [ 1, 2 , 3 ]

const outrosItens = [ ...primeirosItens, 4, 5, 6 ]

console.log(outrosItens) // [ 1, 2 , 3, 4, 5, 6 ]


// Exemplo 3: Spread utilizado para recuperar valores indefinidos
function logger (valorA, ...valorB) {
  console.log(valorA, valorB)
}

logger('DevMedia', 'S2', 'Javascript')
// 'DevMedia', [ 'S2', 'Javascript' ]


// Exemplo 4: Spread em função que soma todos os argumentos que receber
function soma () {
  return Object.values(arguments).reduce((a, b) => a + b, 0)
}

const itens = [ 1, 3, 6, 8 ]

console.log(soma(...itens)) // 18


// Exercícios de Spread/Rest

// Exercício 1: Copiando arrays
const numeros = [10, 20, 30];
const array1 = [...numeros];

// Exercício 2: copiar arrays em uma nova variavel
const lista1 = ["a", "b", "c"];
const lista2 = ["d", "e", "f"];
const lista3 = [...lista1, ...lista2, "ex", "ex"];

// Exercício 3: Adicionando elemento
const array = [1, 2, 3];
const arrayFinal = [...array, 4];

// Exercício 4: Copiando objeto
const usuario = {
  nome: "guilherme",
  idade: 19
};

const objeto = {...usuario};

// Exercício 5: Alterando propriedade com spread
const novoUsuario = {
  ...usuario, 
  idade: 20
};

// Exercício 6: Função que soma valores
function somar() {
  return Object.values(arguments).reduce((a, b) => a + b, 0);
}

const itens = [1, 2, 3, 4];

somar(...itens);

// Resposta correta (Exercício 6):
function somar(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}


// Exercício 7: função que lista argumentos
function listar() {
  return Object.values(arguments).map();
}

const lista = ["A", "B", "C"];

listar(lista);

// Resposta correta (Exercício 7):
function listar(...valores) {
  console.log(valores);
}


// Exercício 8: Desestruturação com Rest
const cinconumeros = [1, 2, 3, 4, 5];
const [1, ...others] = cinconumeros;

// Resposta correta (Exercicio 8):
const [primeiro, ...others] = cinconumeros;


// Exercício 9: Desestruturação de objetos com rest
const funcionario = {
  nome: "eu",
  idade: 21,
  salario: 100,
  departamento: "RH"
};

const {nome: "Guilherme", ...atributos} = funcionario;

// Resposta correta (Exercício 9):
const { nome, ...atributos } = funcionario;


// Exercício 10: função com parâmetros fixos + rest
function dadosUsuario(nome, ...values) {
  const objeto = { nome: nome, ...values};
  return objeto;
}

dadosUsuario("Gui", 25, "Javascript", "Node.js");
// Obs: este exercício(exercício 10) está incompleto pois não sei como resolvê-lo.

// Resposta correta (Exercício 10):
function dadosUsuario(nome, ...infos) {
  return {
    nome: nome,
    infos: infos
  };
}


// Exercícios: mais 10 básicos e um intermediário

// Exercício 1 - lista 2: Copiando um array
const numeros = [1, 2, 3];
const copiaNumeros = [...numeros];

// Exercício 2 - lista 2: Unindo dois arrays
const letras1 = ["a", "b", "c"];
const letras2 = ["d", "e", "f"];
const uniao = [...letras1, ...letras2];

// Exercício 3 - lista 2: Adicionando um valor no final
const numbers = [3, 2, 1];
const adcNumeros = [...numbers, 0];

// Exercício 4 - lista 2: Adicionando um valor no início
const numeroos = [4, 5, 6];
const adcInicioNumeros = [3, ...numeroos];

// Exercício 5 - lista 2: Copiando um objeto
const produto = {
  nome: "Calça",
  preco: 79.99
};

const copiaProduto = {...produto};

// Exercício 6 - lista 2: Alterando uma propriedade do projeto
const novoObjeto = {
  ...produto,
  preco: 59.99
};

// Exercício 7 - lista 2: Função que recebe números (rest)
function exibirNumeros(...numeros) {
  console.log(numeros);
}

// Exercício 8 - lista 2: Função que soma números (rest)
function somarNumeros(...numeros) {
  return numeros.reduce((a + b, 0));
}

// Resposta correta - Exercício 8
function somarNumeros(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}


// Exercício 9 - lista 2: Desestruturação de array com rest
const arrayRest = [1, 2, 3, 4];
const[first, ...outrosNumeros] = arrayRest;

// Exercício 10 - lista 2: Desestruturação de objeto com rest
const pessoa = {
  nome: "eu",
  idade: 20, 
  altura: 1.80
};

const {nome, ...atributos} = pessoa;

// Exercício Intermediário - lista 2: Cadastro de usuário (spread + rest)
function criarUsuario(nome, idade, ...infos) {
  return {
    nome: nome,
    idade: idade,
    infos: infos
  }
}


// Lista 3: 4 exercícios intermediários e 1 avançado

// Exercício 1 - lista 3: Atualizando dados de um objeto, sem alterar o original
const usuario = {
  nome: "eu",
  idade: 19,
  altura: 1.80
};

function atualizarUsuario(usuario, atualizacoes) {
  
  atualizacoes = {
    ...usuario,
    nome: "Guilherme",
    idade: 20
  };

  return atualizacoes;

};

// Resposta correta - Exercício 1
function atualizarUsuario(usuario, atualizacoes) {
  return {
    ...usuario,
    ...atualizacoes
  };
}


// Exercício 2 - lista 3: Filtrando argumentos com rest
function filtrarMaiores(...valores) {
  return valores.filter(valor => valor > 10);
}

// Exercício 3 - lista 3: Separando dados principais e extras
// const aluno = {
//   id: 123321,
//   nome: "Guilherme",
//   turma: "B",
//   curso: "ADS"
// };

function separarDados(objeto) {
  const{id, nome, ...extras} = objeto;
}

// Resposta correta - Exercício 3 (faltou só retornar)
function separarDados(objeto) {
  const { id, nome, ...extras } = objeto;

  return {
    id,
    nome,
    extras
  };
}


// Exercício 4 - lista 3: Inserir dados conforme index
function inserirDados(...valores, valor) {

  arrayNova = [...valores];
  
  for(i = 0; i < arrayNova.length; i++) {
    if(i == 1) {
      arrayNova[i] = valor;
    }
  }
  return arrayNova;
}

// Resposta correta - Exercício 4
function inserirDados(array, valor) {
  return [
    array[0], // valor da casa 0 da array
    valor, // o novo valor na segunda posição
    ...array.slice(1) // pega os valores do array, a partir da segunda posição, que já foi redefinida com o novo valor
  ];
}


// Exercício Avançado - lista 3: Sistema de cadastro de pedidos
function criarPedido(cliente, pedido, quantidade, ...extras) {

  const pedidoCriado = {
    cliente: cliente, 
    pedido: pedido,
    quantidade: quantidade,
    extras: extras
  }

  // const{cliente, pedido, quantidade, ...outros} = pedidoCriado; - sugestão de desestruturação, não sei se daria certo.

  return pedidoCriado;
}
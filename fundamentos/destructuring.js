// Destructucring - oque é?

// Este recurso permite extrair de um Array ou Object valores e transformar em uma variável ou constante

// Exemplo de uso complexo:
const getVencedoresTorneio = () => [
    { id: 1, nome: 'Tiago' },
    { id: 2, nome: 'Pedro' },
    { id: 3, nome: 'Maria' }
  ]

  const notifica = (...nomes) => console.log(
    `vencedores do torneio:\n%s`,
    nomes.map((v, k) => `${++k}º lugar - $`).join('\n')
  )

  const [ usuarioA, usuarioB ] = getVencedoresTorneio()

  notifica(usuarioA.nome, usuarioB.nome)
  // vencedores do torneio:
  // 1º lugar - Tiago
  // 2º lugar - Pedro

  // Exemplo 1: É comum a necessidade de recuperar um item armazenado em um Array e atribuí-lo a uma variável. 
  const totais = [ 10, 20, 30 ]

  const [ valorA, valorB, valorC ] = totais

  console.log(valorA) // 10
  console.log(valorB) // 20
  console.log(valorC) // 30

  // Exemplo 2: extrair itens de um array e armazenar o resto
  const [ valorA, valorB, ..valorC ] = [ 10, 20, 30, 40, 50, 60 ]

  console.log(valorA) // 10
  console.log(valorB) // 20
  console.log(valorC) // [ 30, 40, 50, 60 ]

  // Exemplo 3: Podemos pré-definir valores quando não exista determinado elemento em um Array, 
  // para que quando seja feita a extração deste resultado para uma variável ele receba um valor padrão:
  const [ itemA = 5, itemB = 10 ] = [ 20 ]

  console.log(itemA) // 20
  console.log(itemB) // 10


  // Exemplo 4: Podemos extrair valores de objetos literais utilizando o nome de suas propriedades
  const usuario = { nome: 'Pedro', idade: 18 }

  const { nome, idade } = usuario

  console.log(nome) // Pedro
  console.log(idade) // 18


  // Exemplo 5: Podemos também utilizar os valores pré definidos em objetos assim como é feito nos Arrays
  const usuario = { idade: 18, temFilhos: true }

  const { nome = 'Jonas', idade, temFilhos } = usuario

  console.log(nome) // Jonas
  console.log(idade) // 18
  console.log(temFilhos) // true


  // Exemplo 6: Podemos capturar os resultados que não tenham sido extraídos como variáveis
  const usuario = { nome: 'Pedro', idade: 18, temFilhos: true }

  const { nome, ...outrosDados } = usuario

  console.log(nome) // Pedro
  console.log(outrosDados) // { idade: 18, temFilhos: true }

  // Perceba que ao colocar reticências precedendo a variável outrosDados todos os valores existentes no objeto, 
  // exceto o nome, que havia sido extraído, foram adicionados a ela como um novo objeto

  // Exercício 1: Destructuring básico em array
  const [a, b] = numeros;

  // Exercício 2: Pular posições do array
  // Não sei como realizar este exercício

  // Resolução exercício 2: 
  const valores = [1, 2, 3, 4];
  const [primeiro, , , quarto] = valores;

  console.log(primeiro); // 1
  console.log(quarto);   // 4


  // Exercício 3: Valor padrão - Use destructuring para extrair cor1 e cor2, sendo que cor2 deve ter valor "vermelho" caso não exista.
  const cores = ["azul"];
  const { cor1, cor2 = 'Vermelho' } = cores;   

  console.log(cor1);
  console.log(cor2);

  // Resolução exercício 3: Isso é destructuring de objeto, e cores é um array. Objetos usam {}, arrays usam []
  const cores = ["azul"];
  const [cor1, cor2 = "vermelho"] = cores;

  console.log(cor1); // "azul"
  console.log(cor2); // "vermelho"


  // Exercício 4: 
  const pessoa = { nome: 'Ana', idade: 25 };
  const { n, i } = pessoa;

  // Resolução exercício 4: Aqui você tentou extrair propriedades com nomes diferentes dos que existem.
  // O certo é usar os nomes corretos ou renomear.

  // pegando direto: 
  const { nome, idade } = pessoa;

  // renomeando: 
  const { nome: n, idade: i } = pessoa;


  // Exercício 5: 
  const produto = { nome: "Teclado", preco: 150 }
  const { item, valor } = produto;

  // Resolução exercício 5: Novamente, nomes não existem dentro do objeto.
  const produto = { nome: "Teclado", preco: 150 };
  const { nome: item, preco: valor } = produto;

  console.log(item);  // "Teclado"
  console.log(valor); // 150


  // Exercício 6: 
  const aluno = { nome: "João"};
  const { quem, nota = 0 } = aluno;

  // Resolução Exercício 6: A propriedade quem não existe no objeto.
  const aluno = { nome: "João" };
  const { nome, nota = 0 } = aluno;

  console.log(nome); // "João"
  console.log(nota); // 0


  // Exercício 7: 
  const mostrarUsuario = ({ nome: 'Lucas', idade: 30 }) => { nome, idade };

  // Resolução exercício 7: Vários problemas aqui:
  // isso é tentar fixar valores dentro dos parâmetros
  // { nome: "Lucas" } é objeto literal, não destructuring
  // arrow function com { } necessita de return

  // Resposta correta:
  const mostrarUsuario = ({ nome, idade }) => {
    console.log(nome, idade);
  };

  mostrarUsuario({ nome: "Lucas", idade: 30 }); // Aqui o destructuring é aplicado nos parâmetros.


  // Exercício 8: 
  const getValores = () => [100, 200];
  const { getValores: x, y } = getValores;

  // Resolução Exercício 8: getValores é uma função, não objeto.
  // destructuring deve ser aplicado ao retorno da função.

  // Resposta correta:
  const [x, y] = getValores();

  console.log(x); // 100
  console.log(y); // 200


  // Exercício 9: 
  const lista = [
    { nome: "Carlos", idade: 40 }
  ];

  const { lista: nome } = lista;

  // Resolução exercício 9: lista é um array, não objeto.
  // Deve-se acessar o primeiro objeto dentro do array.

  // Resposta correta:
  const lista = [
  { nome: "Carlos", idade: 40 }
  ];

  const [{ nome, idade }] = lista;

  console.log(nome);  // "Carlos"
  console.log(idade); // 40


  // Exercício 10:
  const letras = ["a", "b", "c", "d"];
  const { letra1, ...outrasLetras } = letras;

  // Resolução exercício 10: { } é para objetos
  // listas usam [ ]
  // rest em array é feito dentro de []

  // Resposta correta: 
  const letras = ["a", "b", "c", "d"];

  const [primeira, ...resto] = letras;

  console.log(primeira); // "a"
  console.log(resto);    // ["b", "c", "d"]


 // ------------------- Mais uma lista com 10 exercícios ------------------
 
 // Exercício 1: 
const coords = [5, 10];

const [ x, y ] = coords;


// Exercício 2:
const numeros = [100, 200, 300];
const [ , itemB, ] = numeros;


// Exercício 3: 
const infos = ["Gui"];
const [nome, idade = 20] = infos;


// Exercício 4: 
const filme = { titulo: "Matrix", ano: 1999 };
const { titulo, ano } = filme;


// Exercício 5: 
const conta = { usuario: "Ana", saldo: 2500 };
const { usuario: nomeUsuario, saldo: valorSaldo } = conta;


// Exercício 6: 
const config = { tema: "claro" };
const { tema, fonte = "Arial" } = config;


// Exercício 7: 
const imprimirLivro = ({ nome, paginas }) => {
  console.log(nome, paginas) 
};

imprimirLivro({ nome: "O Hobbit", paginas: 310 });


// Exercício 8: 
const pegarPontos = () => [12, 20, 35];
const [p1, ...outros] = pegarPontos();


// Exercício 9: 
const usuarios = [
  { nome: "Maria", idade: 22 },
  { nome: "Pedro", idade: 30 }
];

const [{ nome }] = usuarios;

// Exercício 10: 
const pessoa = { nome: "Lucas", idade: 29, cidade: "SP" };
const { nome, ...infoRestante } = pessoa;


// Exercício extra (intermediário):
const empresa = {
  nome: "TechPlus",
  colaboradores: [
    { nome: "Ana", cargo: "Dev" },
    { nome: "Carlos", cargo: "Designer" }
  ]
};

const [{nome: primeiroNome, }, {, cargo: segundoCargo}] = empresa;

console.log(primeiroNome);
console.log(segundoCargo);


// Resolução dos exercícios: a maioria está correta, tirando o exercício intermediário

// Resolução exercício intermediário:
const [
  { nome: primeiroNome },
  { cargo: segundoCargo }
] = empresa.colaboradores;

console.log(primeiroNome);   // Ana
console.log(segundoCargo);   // Designer

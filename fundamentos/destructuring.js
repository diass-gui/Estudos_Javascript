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
  const [] = numeros;

  

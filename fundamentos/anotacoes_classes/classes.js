class Carro {  // Classe carro
    constructor(marca, modelo, motor, ano) { // Construtor
        this._marca = marca;
        this._modelo = modelo;
        this._motor = motor;
        this._ano = ano;
    }

    set marca(string) {
        this._marca = string;
    }

    get marca() {
        return this._marca;
    }

    set modelo(string) {
        this._modelo = string;
    }

    get modelo() {
        return this._modelo;
    }

    set motor(string) {
        this._motor = string;
    }

    get motor() {
        return this._motor;
    }

    set ano(string) {
        this._ano = string;
    }

    get ano() {
        return this.ano;
    }

} 

var c1 = new Carro("Hyundai", "Sonata", 2.4, 2012); // Objeto/Instância carro

console.log(c1.marca);

class TipoCarro extends Carro {
    constructor(marca, modelo, motor, ano, tipo) {
        super(marca, modelo, motor, ano);
        this._tipo = tipo;
    }

    set tipo(string) {
        this._tipo = string;
    }

    get tipo() {
        return this._tipo;
    }

}

let novoCarro = new TipoCarro("Hyundai", "Sonata", 2.4, 2012, "Sedan");

console.log(novoCarro.tipo);

class Concessionaria {

    carros = [];

    constructor(nome, localidade) {
        this._nome = nome;
        this._localidade = localidade;
    }

    set nome(string) {
        this._nome = string;
    }

    get nome() {
        return this._nome; 
    }

    set localidade(string) {
        this._localidade = string;
    }

    get localidade() {
        return this._localidade;
    }

    adicionarCarro(Carro) {
        this.carros.push(Carro);
    }

    exibirCatalogoCarros() {
        return this.carros;
    }

}

const concessionaria1 = new Concessionaria("Glauber Multimarcas", "São Paulo - SP");

const c2 = new TipoCarro("Fiat", "Palio Weekend", 1.8, 2008, "SUV");

concessionaria1.adicionarCarro(c1);
concessionaria1.adicionarCarro(c2);

console.log(concessionaria1.exibirCatalogoCarros()); // Meus testes básicos de POO usando a linguagem JS


// Exercícios - Lista 1: Exercícios Básicos

// Exercício 1: Classe simples
class Pessoa {

    nome;
    idade;

    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
}

const p1 = new Pessoa("Guilherme", 20);


// Exercício 2: Método de classe
class Animal {

    nome;
    especie;

    constructor(nome, especie) {
        this._nome = nome;
        this._especie = especie;
    }

    emitirSom() {
        return `${this._nome} está fazendo barulho.`;
    }
}

const a1 = new Animal("Mary", "Gato");
a1.emitirSom();

// Resposta correta - Exercício 2
// emitirSom() {
//     return `${this._nome} está fazendo barulho.`;
// }


// Exercício 3: Construtor com múltiplos atributos
class Produto {

    nome;
    preco;
    estoque;

    constructor(nome, preco, estoque) {
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }
}

const pro1 = new Produto("Celular", 999.9, 120);


// Exercício 4: Getter
class ContaBancaria {

    titular;
    numConta;
    saldo;

    constructor(titular, numConta, saldo) {
        this._titular = titular;
        this._numConta = numConta;
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(novoValor) { // setter (exercício 5)
        this._saldo = novoValor;
    }
}

const conta1 = new ContaBancaria("Guilherme", "0001", 20.00);
conta1.saldo;


// Exercício 5: Setter
// vou usar esse espaço para testar.
conta1.saldo = 50.00;

// Resposta correta - Exercício 5
conta1.saldo = 50.00;


// Exercício 6: Método com lógica simples
class Calculadora {

    a;
    b;

    constructor(a, b) {
        this._a = a;
        this._b = b;
    }

    somar(a, b) {
        return a + b;
    }
}

const calc1 = new Calculadora(10, 20);
calc1.somar(10, 20);

// Resposta correta - Exercício 6
// somar() {
//     return this._a + this._b;
// }


// Exercício 7: Herança simples
class Veiculo {

    marca;
    modelo;

    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }
}

class Carros extends Veiculo {
    constructor(marca) {
        super(marca); // exercício 8
    }

    get marca() {
        return this._marca;
    }

}

const carros1 = new Carros("Ford");

// Resposta correta - exercicio 7
// constructor(marca, modelo) {
//     super(marca, modelo);
// } // Inserir na classe carros


// Exercício 8: super no construtor
// foi feito no exercício anterior


// Exercício 9: Getter em subclasse
// utilizando este espaço para testar a alteração do getter, 
// que foi realizada no código do exercício 7;
carros1.marca;

// Exercício 10: Herança com múltiplos atributos
class Funcionario {
    
    nome;
    salario;

    constructor(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
}

class Gerente extends Funcionario {

    setor;

    constructor(nome, salario, setor) {
        super(nome, salario);
        this._setor = setor;
    }
}

const f1 = new Funcionario("Guilherme", 1000.0);
const g1 = new Gerente("Guilherme", 2000.0, "Tributação");



// DESAFIO - Sistema de Veículos
class Veiculos {
    
    #_marca;
    #_modelo;
    #_ano;
    #_velocidade = 0;

    // # = privado (modificador de acesso)

    constructor(marca, modelo, ano) {
        this.#_marca = marca;
        this.#_modelo = modelo;
        this.#_ano = ano;
    }

    get marca() {
        return this.#_marca;
    }

    get modelo() {
        return this.#_modelo;
    }

    get ano() {
        return this.#_ano;
    }

    set ano(valor) {
        if(ano < 1886) {
            return;
        }

        this.#_ano = valor;
    }

    get velocidade() {
        return this.#_velocidade;
    }

    set velocidade(valor) {
        if(valor < 0) {
            return "Insira uma velocidade válida";
        }

        this.#_velocidade = valor;
    }

    acelerar(valor) {
        if(valor < 0) {
            return "Insira uma velocidade válida";
        } 

        this.velocidade += valor;
    }

    frear(valor) {
        // if(valor < 0 && valor <= this.velocidade) {
        //     return "Insira uma velocidade válida";
        // }

        // Correção: frear()
        if (valor < 0) return;

        if (valor > this.velocidade) {
            this.velocidade = 0;
        } else {
            this.velocidade -= valor;
        }

        // this.velocidade -= valor;
    }
}

class Carro extends Veiculos {

    _portas;

    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this._portas = portas;
    }

    descricao() {
        return `Carro: ${this.marca} ${this.modelo} ${this.ano} com ${this._portas} portas.
        Velocidade atual: ${this.velocidade} km/h.`;
    };
}

class Moto extends Veiculos {

    _cilindradas;

    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this._cilindradas = cilindradas;
    }

    acelerar(valor) {
        // Não consegui pensar de primeira em uma regra para a aceleração das motos
        // caso eu chegue em alguma, eu refaço o código

        if(valor < 0) {
            return "Insira um valor válido";
        }

        this.velocidade += valor;
    }

    descricao() {
        return `Moto: ${this.marca} ${this.modelo} ${this.ano} com ${this._cilindradas} cilindradas.
        Velocidade atual: ${this.velocidade} km/h.`;    
    }

}

const c1 = new Carro("Volkswagen", "Gol", 2004, 4);
const m1 = new Moto("Yamaha", "Ténéré", 2016, 249);

// console.log(c1.marca);
// console.log(m1.modelo);

c1.velocidade = 20.0;
m1.velocidade = 30.0
c1.acelerar(20);
m1.acelerar(30);

// console.log(c1.velocidade);
// console.log(m1.velocidade);

// console.log(c1.descricao());
// console.log(m1.descricao());

m1.frear(15);

console.log(c1.descricao());
console.log(m1.descricao());
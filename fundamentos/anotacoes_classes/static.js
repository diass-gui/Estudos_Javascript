// Anotações - Static
// Como utilizar:
class MinhaClasse {
    static variavel = 10;

    static metodo() {
        // ...Alguma lógica
        console.log('Chamou o método');

    }

    // metodo() {
    //     // ...Alguma lógica
    //     console.log('Chamou o método');

    // }

}

console.log(MinhaClasse.variavel);
console.log(MinhaClasse.metodo());


// Exercícios (Static) - Lista 1: 5 exercícios básicos

// Exercício 1 - Criando um método simples
class Calculadora {

    constructor(a, b) {
        this._a = a;
        this._b = b;
    }

    static somar(a, b) {
        return console.log(a + b);
    }
}

Calculadora.somar(10, 20);


// Exercício 2 
class Mensagem {

    static ola() {
        return "Olá, seja bem-vindo!";
    }
}

console.log(Mensagem.ola());


// Exercício 3
class Usuario {

    constructor(user) {
        this._user = user;
    }

    static tipo() {
        return "Usuário do sistema";
    }    
}

const u1 = new Usuario("gui");
// console.log(u1.tipo()); // is not a function
console.log(Usuario.tipo());


// Exercício 4
class Conversor {

    static celsiusParaFahrenheit(temperatura) {
        return (temperatura * 9/5) + 32; 
    }
}


// Exercício 5
class Pessoas {
    
    falarNome() {
        return "Meu nome é João";
    }

    static especie() {
        return "Humano";
    }
}

const p1 = new Pessoas();

console.log(p1.falarNome());  // Meu nome é João
console.log(Pessoas.especie());  // Humano


// Exercícios - Lista 2: Intermediários

// Exercício 1: Validação
class Validador {

    static ehPar(numero) {
        if(numero % 2 == 0) {
            return true;
        } 
        return false;
    }
}

console.log(Validador.ehPar(2));
console.log(Validador.ehPar(5));


// Exercício 2: Chamando outro método
class Matematica {
    static somar(a, b) {
        return a + b;
    }

    static dobro(n) {
        return n * 2;
    }

    static somarDobro(a, b) {
        return this.somar(this.dobro(a), this.dobro(b));
        // const dobroA = this.dobro(a);
        // const dobroB = this.dobro(b);
        // return this.somar(dobroA, dobroB);
    }
}

console.log(Matematica.somarDobro(7, 10));


// Exercício 3: Validação de idade
class Condutor {
    
    static podeDirigir(idade) {
        if(idade >= 18) {
            return "Pode dirigir";
        }
        return "Não pode dirigir";
    }
}

console.log(Condutor.podeDirigir(16));
console.log(Condutor.podeDirigir(29));


// Exercício 4: Fábrica de objetos
class Produto {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }

    static criarProdutoPadrao(nome, preco) {
        return {
            nome: nome,
            preco: preco
        }
    }
}

const pro1 = new Produto("Generico", 10);
console.log(Produto.criarProdutoPadrao("Generico", 10));


// Exercício 5: comparando objeto vs classe
class ContaBancarias {
    
    constructor(saldo) {
        this._saldo = saldo;
    }

    verSaldo() {
        return this._saldo;
    }

    static banco() {
        return "Banco Nacional";
    }
}

const cb1 = new ContaBancarias(200);
console.log(cb1.verSaldo());
console.log(ContaBancarias.banco());


// Exercício 6: Erro
class Autenticacao {
    static login(usuario, senha) {
        if(usuario == "admin" && senha == "1234") {
            return "Login efetuado";
        }
    }
}

const aut1 = new Autenticacao();

// console.log(login("gui", "4321")); // login is not defined
console.log(Autenticacao.login("admin", "1234"));


// Exercícios - Lista 3: Avançados

// Exercício 1
class SistemaLogin {

    static #tentativas = 0;

    static login(usuario, senha) {
        if(usuario == "admin" && senha == "1234") {
            this.#tentativas = 0;
            return "Login efetuado";
        } else {
            this.#tentativas += 1;
            return "Login inválido";
        }
    }

    static getTentativas() {
            return this.#tentativas;
        }
}

console.log(SistemaLogin.login("gui", "4321")); // Login inválido
console.log(SistemaLogin.login("abner", "2431")); // Login inválido
console.log(SistemaLogin.getTentativas()); // tentativas: 2
console.log(SistemaLogin.login("admin", "1234")); // Login efetuado


// Exercício 2
// class CadastroUsuario {
    
//     static validar(usuario) {

//         // const nomeUsuario = usuario.nome;
//         // const idadeUsuario = usuario.idade;
//         // const emailUsuario = usuario.email;

//         // if(nomeUsuario.length < 3 || idadeUsuario < 18 || emailUsuario.indexOf("@") == null) {
//         //     return ["Nome Inválido", "Email inválido", "Idade não compatível"];
//         // } else {
//         //     return "Cadastro válido";
//         // }

//         if(usuario.nome.length < 3 || usuario.idade < 18 || usuario.email.indexOf("@") == -1) {
//             return ["Nome invalido", "Email inválido", "Idade não compatível"];
//         } else {
//             return "Cadastro válido";
//         }
//     }
// }

const user1 = {
    nome: "Gui", 
    idade: 17, 
    email: "usergmail.com"
};

const user2 = {
    nome: "Guilherme",
    idade: 29,
    email: "guigui@gui.com"
};

// console.log(CadastroUsuario.validar(user1)); // Saída: Array de erros
// console.log(CadastroUsuario.validar(user2)); // Cadastro válido


// Correção - Classe
class CadastroUsuario {

    static validar(usuario) {
        const erros = [];

        if (usuario.nome.length < 3) {
            erros.push("Nome inválido");
        }

        if (usuario.idade < 18) {
            erros.push("Idade não compatível");
        }

        if (!usuario.email.includes("@")) {
            erros.push("Email inválido");
        }

        if (erros.length > 0) {
            return erros;
        }

        return "Cadastro válido";
    }
}


// Novo exercício avançado - treino de lógica e conteúdo
class ValidadorConta {

    static validar(Usuario) {

        const erros = [];

        if(Usuario.usuario.length < 4) {
            erros.push("Insira um usuário válido");
        } 

        if(Usuario.senha.length < 6) {
            erros.push("Senha inválida");
        }

        if(!Usuario.email.includes("@") || !Usuario.email.includes(".")) {
            erros.push("Email inválido");
        }

        if(erros.length == 0) {
            return "Conta válida";
        }

        if(erros.length > 0) {
            return erros;
        }
    }   
}

const user3 = {
    usuario: "big",
    senha: "1234",
    email: "bigbigbigcom"
};

const user4 = {
    usuario: "eumesmo",
    senha: "654321",
    email: "eueueu@eu.com"
};

const user5 = {
    usuario: "ibaibaiba",
    senha: "765432",
    email: "eueueueucom"
};

console.log(ValidadorConta.validar(user3));
console.log(ValidadorConta.validar(user4));
console.log(ValidadorConta.validar(user5));
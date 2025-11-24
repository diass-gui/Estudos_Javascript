// Variáveis

// Possui 3 formas de declarar variáveis
// var, let e const

var nome = "Guilherme";
var idade = 20;

// O que é Hoisting?
/*
    Hoisting é um mecanismo do Javascript onde as variáveis e declarações de função são movidas para o início do seu escopo antes da execução do código.
*/

// Let
/*
    Uma variável declarada com let só é válida naquele escopo/bloco de código
*/

let ovoFrito = "mexido";
let trocador = "OK";

if(trocador == "OK") {
    let suco = "laranja";
    console.log(suco);
}
console.log(ovoFrito);
console.log(suco);
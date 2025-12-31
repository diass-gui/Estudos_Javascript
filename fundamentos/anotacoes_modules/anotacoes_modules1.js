// export: recurso que queremos deixar público (compartilhável)
// export [oque-queremos-compartilhar];


// import: recurso que queremos importar/utilizar, que está em outro arquivo
// import [oque-queremos-importar] from [nome-do-modulo];

// para entendermos a utilização, iremos fazer o caso de uso do conteúdo, 
// através do exemplo de uma calculadora. vamos para o arquivo util.mjs

export function mensagem() {
    return "Deu certo a utilização!";
}
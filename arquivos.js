const fs = require("fs");

console.log("FS importado com sucesso.");

fs.readFile('teste.txt', function(erro, sucesso){
    if(erro){
        console.log("Ocorreu um erro. O erro foi:");
        console.log(erro);
    }
    else{
        console.log(sucesso.toString());
        console.log("o texto está na tela");
    }
});

console.log("função de leitura executada");

let paraEscrever = process.argv[2];

fs.appendFile('escrever.txt', `${paraEscrever}\r\n`, erro => {
    if(erro){
        console.log("Erro ao escrever o arquivo. O erro foi:");
        console.log(erro);
    }
    else{
        console.log("Arquivo escrito com sucesso");
    }
});

console.log("função de escrita executada");

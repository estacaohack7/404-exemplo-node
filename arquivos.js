const fs = require("fs");

console.log("FS importado com sucesso.");

fs.readFile('teste.txt', function(erro, sucesso){
    if(erro){
        console.log("Ocorreu um erro. O erro foi:");
        console.log(erro);
    }
    else{
        console.log(sucesso.toJSON());
        console.log("o texto está na tela");
    }
});

console.log("função de leitura executada");


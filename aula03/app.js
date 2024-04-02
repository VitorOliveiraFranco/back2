//criar e remover pastas
const fs = require('fs');

//com método sincrono
//fs.mkdirSync('logs');

//com método assincrono
/*fs.mkdir('logs2', (erro) => {
    if(erro){
        console.log(erro);
    }
})*/

//para removar pastas
//testar a existencia da pasta
if(fs.existsSync('logs2')){
    fs.rmdirSync('logs2');
}
console.log('Fim da execução');
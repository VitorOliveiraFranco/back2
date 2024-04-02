//criar e deletar arquivos
const fs = require('fs');

fs.appendFile('logs.log', 'loguei\n', (erro) => {
    console.log(erro);
})

//apagar arquivos

if(fs.existsSync('logs.log')){
    fs.rmSync('logs.log');
}
console.log('Fim da execução');
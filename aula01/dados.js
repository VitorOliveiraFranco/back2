let nomes = ['Admilson', 'Benevides', 'Clementina'];

let frutas = ['Abacaxi', 'Banana', 'Cereja'];

//exportação explicita do array

//module.exports = nomes;
//module.exports = frutas;

function soma(a, b){
    return a + b;
}

module.exports = {
    nomes,
    frutas,
    soma
}
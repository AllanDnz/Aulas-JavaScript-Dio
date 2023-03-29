const gasolina = 4.18;
const etanol = 5.18;

let tipoCombustivel = 'etanol';
let distancia = 100;
let gasto = 10;


if(tipoCombustivel == 'gasolina'){
    valorTotal = (distancia / gasto) * gasolina;
    console.log('Valor total = ' + valorTotal);
}else if(tipoCombustivel == 'etanol'){
    valorTotal = (distancia / gasto) * etanol;
    console.log('Valor total = ' + valorTotal);
}else{
    console.log('Digete um Valor valido')
}

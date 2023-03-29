function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if(imc < 18.5){
        return 'Abaixo'
    }else if (imc >= 18.5 && imc < 25) {
        return 'normal'
    }else if(imc >= 25 && imc < 30){
        return 'acima'
    }else if(imc >=30 && imc < 40){
        return 'obeso'
    }else{
        return 'grave'
    }
}


(function () {
    const peso = 75;
    const altura = 1.81;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
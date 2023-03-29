const altura = 1.88, peso = 48;

const imc = peso / (altura*altura);

if(imc < 18.5){
    console.log('Abaixo')
}else if (imc >= 18.5 && imc < 25) {
    console.log('normal')
}else if(imc >= 25 && imc < 30){
    console.log('acima')
}else if(imc >=30 && imc < 40){
    console.log('obeso')
}else{
    console.log('grave')
}
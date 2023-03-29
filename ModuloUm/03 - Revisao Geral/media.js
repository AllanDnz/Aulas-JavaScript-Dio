const nota1 = 4, nota2 = 5, nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    console.log('Passou de semestre')
}else if(media < 7 & media >= 5){
    console.log('ficou de recuperação')
}else{
    console.log('reprovou')
}


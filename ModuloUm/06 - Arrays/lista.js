
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//1) Crie um programa que dado um número imprima a sua tabuada.

for (let i = 0; i < numbers.length; i++) {
    //console.log('A tabua do numero ' + numbers[i] +' eh:')
    for (let j = 0; j <= 10; j++) {
        console.log(j * numbers[i]);
    }
}

//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + ' este eh par')
    }
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const names = ['vermelho', 'azul', 'Vinho', 'laranja', 'violeta']

for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'v' || names[i].charAt(0) === 'V') {
        console.log(names[i])
    }
}

//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const pares = []
let q = 0;

for (let i = 0; i <= 50; i++) {

    if (i % 2 === 0 && i >= 10 && i <= 50) {
        pares[q] = i;
        q += 1;
    }
}

console.log(pares)



//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
const notas = [2, 17, 3, 8, 10, 4]

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 5) {
        console.log('Sua nota foi ' + notas[i] + ' esta de recuperação')
    }
}

//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
let maior = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maior) {
        maior = notas[i];
    }
}
console.log('A maior nota eh: ' + maior)
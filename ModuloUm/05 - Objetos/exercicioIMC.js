/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc(peso, altura){
        const imc = this.peso / Math.pow(2, this.altura);
        console.log('Seu IMC eh '+ imc.toFixed(2))
        return imc
    }

    define(result){
        if(result < 18.5){
            console.log('Esta Abaixo')
        }else if (result >= 18.5 && result < 25) {
            console.log('Eh Normal')
        }else if(result >= 25 && result < 30){
            console.log('Esta Acima')
        }else if(result >=30 && result < 40){
            console.log('Voce esta Obeso')
        }else{
            console.log('Seu estado eh Grave')
        }
    }

    descrever(){
        console.log(`Seu nome eh ${this.nome} e seu peso eh ${this.peso}`)
    }
}


const people = new Pessoas('Allan', 75, 1.81);

people.define(people.imc())
people.descrever()
/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/


class Carro{
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, gastoPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }

    descrever(){
        console.log(`Seu carro eh um ${this.marca} da cor ${this.cor}`)
    }

    price(distancia, valor){
        const prices = (distancia/this.gastoPorKm) * valor;
        console.log('O valor total gasto eh de R$ ' + prices)
    };
    
}

const car = new Carro('hb20', 'branco', 10);

car.price(100, 5.18);
car.descrever();
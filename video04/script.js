// function showList(empresa, ...clientes) {
//    console.log(empresa);
//    console.log(clientes);
//}

// showList("Origamid", "João", "Maria", 10);

// const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

// console.log(Math.max(...numeros));

// const items = document.querySelector("li");

// [...items].map(item => {
//    console.log(item);
// });

// const carro = {cor: "Azul", portas: 4, ano: 2020};

// const cloneCarro2 = carro;

// const cloneCarro ={...carro, turbo: true};

class Transporte {
    constructor(){
        this.terrestre = true;
    }
}

class Carro extends Transporte {
    constructor(){
        super();
        this.cor = cor;
        this.portas = portas
    }
}

const carro = new Carro("Vermelho", 4);

const cloneCarro = { ...carro};

console.log(carro);
console.log(cloneCarro);
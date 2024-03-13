class Aluno {
  constructor(nome, idade, escola, classe) {
    this.name = nome;
    this.idade = idade;
    this.escola = escola;
    this.classe = classe;
  }
  calcularidade() {
    return 2024 - this.idade;
  }
  apresentar() {
    console.log(
      `ola meu nome é, ${
        this.name
      } e tenho ${this.calcularidade()}. estou cursando o ${this.classe}`
    );
  }
}

const aluno1 = new Aluno(1234, "pietra", 2007, "desenvolvimento de sistema");
aluno1.apresentar();

console.log(
  "-------------------------------------------------------------------"
);
// criar atividade com a classe sorvete.

class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getPreco() {
    return this.preco;
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
  pedido() {
    console.log(
      `O sorvete escolhido foi ${
        this.sabor
      }, no valor de R$${this.getPreco()} no tamanho ${this.tamanho}`
    );
  }
}

const morango = new Sorvete("Morango", 11, "G");
const chocolate = new Sorvete("chocolate", 12, "P");
const melancia = new Sorvete("melancia", 2, "M");

morango.pedido();
chocolate.pedido();
melancia.pedido();

morango.setPreco(10.51);

console.log("-------------------------------------------------------------");

var data1 = new Date()
console.log(data1)

// criando um objeto do tipo "data"
var data2 = new Date("2005-05-12");
console.log(data2);

var data3 = new Date("2008-03-16");
console.log(`data: ${data3}`);
console.log(`ano: ${data3.getFullYear()}`)
console.log(`mês: ${data3.getMonth(+1)}`)

const mês ()
console.log(`retornando o mês por escrito!`);
console.log(`mês: ${mês[data3.getMonth()]}`);


 
console.log(`dia da semana: ${diadasemana[data3.getDay()]}`);

var datai = new Date (2007);
return 2024


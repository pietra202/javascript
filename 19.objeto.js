 class pessoa {
   constructor(pNOME, pIDADE) {
    this.name = pNOME;
     this.idade = pIDADE;
   }
  apresentarSe() {
     console.log(`ola, meu nome è ${this.name} e eu tenho ${this.idade} anos.`);
  }
  envelhecer() {
     this.idade++;
  }
 }

// // criando objeto do tipo pessoa

var pessoa1 = new pessoa("joana darc", 19);
 var pessoa2 = new pessoa("maria madalena,,", 60);

 pessoa1.apresentarSe();
 pessoa2.apresentarSe();

 pessoa1.envelhecer();
 pessoa1.apresentarSe();

 pessoa2.envelhecer();
 pessoa2.apresentarSe();

 console.log("--------------------ABSTRAÇÃO--------------------------");

// ABSTRAÇÃO- ABSTRAI CARACTERÍSTICAS MAIS IMPORTANTES E DESCARTAM DETALHES IRRELEVANTES
class pet {
  constructor(nome, idade, tipo) {
     this.nome = nome;
     this.idade = idade;
     this.tipo = tipo;
 }
}
 alimentar() { 
console.log(`${this.nome} foi alimentado!`);
 }
 
 const meupet = new pet("romeu", 2, "cachorro");

 console.log(
   `meu pet é um ${meupet.tipo}, chamado ${meupet.nome} e tem ${meupet.idade} anos`
 );

 console.log("---------------------HERANÇA---------------------------------");

 class Animal {
   constructor(nome, idade, tipoAlimentacao) {
    this.name = nome
    this.idade = idade;
    this.tipoAlimentacao = tipoAlimentacao;
   }

  alimentar() {
     console.log(`O animal ${this.nome} foi alimentado!`);
   }

   emitirSom() {
    console.log(`Barulho padrão de animal!`);
   }
 }

 class Cachorro extends Animal {
  alimentar() {
     console.log(`O cachorro ${this.nome} foi alimentado`);
  }

  emitirSom() {
    console.log(`🐶 Au au! 🐶`);
   }
 }
 const Pet = new Animal("Carlos", 10, "Comida espacial");
 const meuCachorro = new Cachorro("Rex", 3, "Ração");

 Pet.alimentar();
 Pet.emitirSom();

console.log("-------------------ENCAPSULAMENTO------------------------------");

 class petzinho {
  constructor(nome, idade, tipo) {
     this.name = nome;
     this.idade = idade;
     this.tipo = tipo;
   }

  getnome() {
    return this.name;   }

  setNome(novoNome) {
     this.name = novoNome;
  }
 }

 const novoPetzinho = new petzinho("romeu", 3, "cachorro");

console.log(novoPetzinho.getnome());
 console.log(novoPetzinho.getnome());

console.log(
  "--------------------------POLIMORFISMO------------------------------"
);

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerBarulho() {
    console.log("O animal faz um barulho genérico.");
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O cachorro late!");
  }
}

class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }

  fazerBarulho() {
    console.log("O gato mia!");
  }
}

const animais = [new Cachorro("Rex"), new Gato("Mia"), new Animal("Bob")];

for (const animal of animais) {
  animal.fazerBarulho();
}
console.log("---------------------------------------------------");

class retangulo {
  setlargura(novalargura) {}
}

var ret1 = new retangulo(10, 15);

function displayRet(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`area = ${retangulo.obterArea()}`);
  console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}
displayRet(ret1);
ret1.setlargura(20);
displayRet(ret1);
ret1.setcomprimento(20);
displayRet(ret1);

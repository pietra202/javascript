// incrementos
var idade = 16;
console.log(idade);

idade++;
console.log(idade);

idade--;
console.log(idade);

console.log("-------------");

var novaidade = idade++;
console.log("idade:", idade, "| nova idade:", novaidade);

var novaidade = ++idade;
console.log("idade:", idade, "| nova idade:", novaidade);

novaidade += 10;
console.log(novaidade);

novaidade -= 20;
console.log(novaidade);

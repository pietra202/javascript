function idade(anonascimento) {
  return 2024 - anonascimento;
}
var nome = "pietra";
console.log(`ola, eu sou ${nome} e tenho ${idade(2007)} anos de idade`);

function mediacombustivel(combustivel, km) {
  return combustivel * km;
}

console.log(`carro 1: 20l -> percorre $(mediacombustivel(20, 12)}kms.`);
console.log(`carro 2: 8l -> percorre $(mediacombustivel(20, 12)}kms.`);
console.log(`carro 3: 2l -> percorre $(mediacombustivel(20, 12)}kms.`);

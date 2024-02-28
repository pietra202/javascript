function saudacao(pietra) {
  console.log(`Ola ${pietra}, seja bem-vindo!`);
}
saudacao("pietra");
saudacao("eloa");
saudacao("bianca");

function somar(valor, valor2) {
  return valor + valor2;
}
console.log(`5 + 3 = ${somar(5, 3)}`);
console.log(`12 + 8 = ${somar(12, 8)}`);
console.log(`6,5 + 2,12 = ${somar(6.5, 2.12)}`);

var v1 = 9;
var v2 = 6;
console.log(`5 + 3 = ${somar(v1, v2)}`);

// criando uma função
function desconto(valorvende, desc) {
  return (valorvende * desc) / 100;
}
console.log("-------------------------------------------------------");

console.log(`total do pedido: R${totalPedido}`);
console.log(`total do desconto R${totaldesconto}`);
console.log(`valor final da venda R$ ${totalPedido - totaldesconto}`);
console.log("--------------------------------------------------------");

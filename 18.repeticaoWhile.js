let contador = 0;

while (contador < 5) {
  contador++;
  console.log(contador);
}

var x = 20;

while (x > 10) {
  console.log("entrei no laço while ...");
  x--;
}
console.log("terminei");

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

// -----------------------------------------------------------------
console.log("-----------------------------------------------------");
console.log("lançamento");

let limite = 500;
let fatura = 0;

do {
  let gastos = Math.random() * 100;
  fatura += gastos;
  console.log(
    `gastei R$ ${gastos.toFixed(2)}---------fatura : R$ ${fatura.toFixed(2)}`
  );
  fatura > limite && console.log(`estourou o limite do cartão`);
} while (fatura <= limite);
// ----------------------------------------------------------------------
// jogo cara ou coroa
console.log("-------------------------------------------------------------");

var rodada = 1;
var moeda = "";
var escolha = "";
var vitoria = 0;
var derrota = 0;

while (rodada <= 3) {
  moeda = Math.random() >= 0.3 ? "cara" : "coroa";
  escolhajogador = Math.random() >= 0.3 ? "cara" : "coroa";
  if (escolha == "cara") {
    console.log(`parabéns, você ganhou`);
    vitoria++;
  } else {
    console.log(`que pena, você perdeu`);
    derrota++;
  }
  rodada++;
}

console.log("________________________________________________________");
console.log(`                     PLACAR                              `);
console.log("________________________________________________________");
console.log(`${vitoria > derrota ? "VOCE VENCEU" : "VOCE PERDEU"}`);
console.log("________________________________________________________");





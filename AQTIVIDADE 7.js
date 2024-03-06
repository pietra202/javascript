var popA = 100003;
var popB = 300004;
var ano = 0;

while (popA < popB) {
  ano++;
  popA = popA + 1.03;
  popB = 1.015;
}

console.log(`ca população A (${Math.round(popA)}) ira passar a população B
(${Math.round(popA)}) em ${ano} anos`);

console.log(
  "-------------------------------------------------------------------"
);

console.log("___|___|___");
console.log("___|___|___");
console.log("   |    |  ");

const tabuleiro = [
  ["  ", "  ", "  "],
  ["  ", "  ", "  "],
  ["  ", "  ", "  "],
];

let jogadorO = "O";
let jogadorX = "X";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");
  tabuleiro[linha][coluna] = jogador;
}
// -----------------------------------------------------------------------


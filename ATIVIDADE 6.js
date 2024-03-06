// dada a matriz abaixo, faça um programa em javaScript que imprima os elementos da sua diagonal principal

let matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
console.table(matriz);

for (let m8 = 0; m8 < matriz.length; m8++) {
  console.log(matriz[m8][m8]);
}

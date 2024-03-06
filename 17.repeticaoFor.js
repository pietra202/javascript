// escrever para usuario
for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// escreva todos os numeros de 1 a 20
console.log("--------------------------------------------------");

for (let p = 1; p < 20; p++) {
  console.log(p);
}
// escreva numeros pares de 1 a 20
console.log("-------------------------------------------------");
for (let p = 2; p < 20; p += 2) {
  console.log(p);
}
// calcule e exiba somatoria e seus elementos utilizados

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;

for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}

console.log(`a soma dos sistemas do array é : ${somar}`);

console.log("----------------------------------------------------------");

let array = [5, 6, 8, 14, 0, 9, 7, 2];
for (let i = 0; i < array.length; i++) {
  array[i] *= 3;
}

console.log("----------------------------------------------------------");

var matriz = [
    [8, 4, 1],
    [3, 7, 8],
];

console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) {
        console.log(`matriz{$(linha},${coluna}] = ${matriz[linha][coluna]}`);
    }
}
console.log("-------------------------------------------------------");
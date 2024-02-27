// criando uma matrizes
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [7, 3, 9],
];
console.log(matriz);

// obtendo elemento com base e seus indices

console.table(matriz);
console.log(matriz[2][2], matriz[0][0]);
console.log(matriz[0][0], matriz[2][2]);
console.log(matriz[0][2], matriz[2][0]);
console.log(matriz[2][0], matriz[0][2]);

console.log(
  "------------------------------------------------------------------"
);

var usuario = ["Pietra", 16, "rosa", "melão", "botelho", "romeu"];
console.log("oi", usuario[0], "seja bem-vindo ao nosso sistema");
console.log("você mora no", usuario[4], ", e tem um pet chamado", usuario[5]);
console.log("sua idade é", usuario[1], "e gosta muito da fruta", usuario[3]);
console.log("sua cor favorita é", usuario[2]);

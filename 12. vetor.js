const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[3]);

numeros[2] = 6;
console.log(numeros);
console.log(numeros[2]);
console.log("--------------------------------------------------");

var dinos = ["tiranossauro rex", "estegossauro", "anquilossauro"];
console.log(dinos[0]);
console.table(dinos);
console.log("o vetor tem", dinos.length, "elementos!");

dinos.push("brontossauro", "melacirapitor");
console.log(dinos);

dinos.unshift("tricoratops");
console.table(dinos);

// alterando elementos com base no indice (posição)
dinos[3] = "titanossauro";
console.table(dinos);

// obtendo um elemento com base em seus indice
console.log("primeira posição:", dinos[0]);
console.log("segunda posição:", dinos[1]);
console.log("item de posição 20:", dinos[19]);

// removendo item do vetor
dinos.pop();
console.table(dinos);

dinos.shift();
console.table(dinos);

dinos.splice(0, 1);
console.table(dinos);

console.log("---------------------------------------------------")
// console.l9og("continuação da aula")
var dinos = 
    "triceratops";
    "tiranossauro";
    "estegossauro";
    "anquilossauro";
    "brontossauro";
    "ictiossauro";
    "pterodactilo";
    "espinossauro";

    var elementosprocurados = "pterodactilo";
    var posição = dinos.indexOf(elementosprocurados);
    console.log("O" + elementosprocurados + "esta na indice") + "pterodactilo"

    var elementosprocurados = "pterodactilo";
    var posição = dinos.indexOf(elementosprocurados);
    console.log("O" + elementosprocurados + "esta na indice") + "pterodactilo"
    
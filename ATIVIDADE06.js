// fazer o JavaScript receber dois textos e compara-los
function compararSpring(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}

console.log(compararSpring("Oi", "Ola")); //false
console.log(compararSpring("Teste", "teste")); // true
console.log(compararSpring("ABC", "abc")); // true
console.log(compararSpring("JavaScript", "javaScript")); // true
console.log(compararSpring("openAI", "OpenAI")); // false

function extrairNumeros(texto) {
  return texto.match(/\d+/g).map(Number);
}

// Exemplo de uso
console.log(extrairNumeros("abc123def456ghi")); // [123, 456]

function inverterOrdemDasPalavras(frase) {
  return frase.split(" ").reverse().join(" ");
}

// Exemplo de uso
console.log(inverterOrdemDasPalavras("Olá mundo"));

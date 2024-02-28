var anonascimento = 2004;

if (anonascimento > 2003);
else console.log(`a pessoa nasceu depois de 2003`);

if (anonascimento > 2003);
else console.log(`a pessoa nasceu antes de 2003`);

if (anonascimento > 2003);
else console.log(`a pessoa nasceu em de 2003`);

function sinaleiro(cor) {
  if (cor == "vermelho");
  console.log(`pare`);
  if (cor == "amarelo");
  console.log(`preste atenção`);
  if (cor == "verde");
  console.log(`siga`);

  console.log(`você informou cores diferente de verda, amarelo ou vermelho`);
}
sinaleiro("verde");

console.log("--------------------------------------------------------");

const login = "admin";
var senha = "40028922";
// ---------------------------------------------------------//
const loginuser = "admin";
const senhauser = "admin";
// --------------------------------------------------------//

if (login == loginuser && senha == senhauser) console.log("acesso permitido");
else console.log("acesso negado!");

console.log("----------------------------------------------------------");

var idade = 16;

if (idade <= 16) {
  console.log("entrou no if..");
  idade++, console.log(`incrementei a idade...`);
  console.log(`a nova idade é ${idade}`);
  console.log(`agora estou saindo do bloco de codigos if`);
}
console.log(`terminei!`);

console.log("--------------------------------------------------------------");

var preço = 500;

var resultado = preço <= 100 ? "ta barato" : "vish ta caro";

console.log(resultado);

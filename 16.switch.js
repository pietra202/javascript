var menuselecionado = "Home";
switch (menuselecionado) {
  case "Home":
    console.log(`você clicou no linck Home`);
    break;
  case "quem somos":
    console.log(`você clicou no linck quem somos`);
    break;
  case "contato":
    console.log(`você clicou no linck contato`);
    break;
  default:
    console.log(`opção invalida`);
    break;
}
console.log("-----------------------------------------------------------");
var mes = 4;
switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log(`primeiro semestre`);
    break;
  case 4:
  case 5:
  case 6:
    console.log(`segundo semestre`);
    break;
  case 7:
  case 8:
  case 9:
    console.log(`terceiro semestre`);
    break;
  case 10:
  case 11:
  case 12:
    console.log(`quarto semestre`);
}

console.log(
  "------------------------------------------------------------------"
);

function votar(idade) {
  if (votar < 16) console.log("você não pode votar");
  else if (idade >= 16 && idade > 18)
    console.log("você pode votar, mas não é obrigatorio");
  else console.log("você pode votar");
}

votar(10);

console.log(
  "----------------------------------------------------------------------"
);

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log("você não pode votar");
      break;
    case idade >= 16 && idade < 18:
      console.log("você pode votar, mas não é obrigatorio");
      break;
    default:
      console.log("voce pode votar");
      break;
  }
}
votacao(16);
console.log("------------------------------------------------------------");

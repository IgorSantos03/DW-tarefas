const qtde_dias = 517;

const qtde_anos = Math.floor(qtde_dias / 365);

qtde_dias = qtde_dias % 365;

const qtde_meses = Math.floor(qtde_dias / 30);

qtde_dias = qtde_dias % 30;

console.log("Anos:  " + qtde_anos);
console.log("Meses: " + qtde_meses);
console.log("Dias:  " + qtde_dias);

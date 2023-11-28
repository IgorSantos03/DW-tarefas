var salario = Number(prompt("Digite o salário atual do funcionário"));

salario = salario * 1.15;
salario = salario - (salario * 0.08);

HTMLFormControlsCollection.log("O novo salário é: " + salario);
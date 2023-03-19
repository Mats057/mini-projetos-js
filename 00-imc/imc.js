document.getElementById("calcular").addEventListener("click", calcular);

function calcular() {
  let nome = document.getElementById("nome").value;
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;
  let resultado = peso / (altura * altura);

  if (nome != "" && peso != "" && altura != "") {
    if (resultado < 18.5) {
      document.getElementById("resultado").innerHTML =
        "Seu IMC é " + resultado.toFixed(2) + " e você está abaixo do peso.";
    } else if (resultado >= 18.5 && resultado < 25) {
      document.getElementById("resultado").innerHTML =
        "Seu IMC é: " +
        resultado.toFixed(2) +
        " e você está com o peso normal.";
    } else if (resultado >= 25 && resultado < 30) {
      document.getElementById("resultado").innerHTML =
        "Seu IMC é " + resultado.toFixed(2) + " e você está com sobrepeso.";
    } else if (resultado >= 30 && resultado < 35) {
      document.getElementById("resultado").innerHTML =
        "Seu IMC é " +
        resultado.toFixed(2) +
        " e você está com obesidade grau 1.";
    } else if (resultado >= 35 && resultado < 40) {
      document.getElementById("resultado").innerHTML =
        "Seu IMC é " +
        resultado.toFixed(2) +
        " e você está com obesidade grau 2.";
    } else if (resultado >= 40) {
      document.getElementById("resultado").innerHTML =
        "Seu IMC é " +
        resultado.toFixed(2) +
        " e você está com obesidade grau 3.";
    }
  } else {
    document.getElementById("resultado").innerHTML =
      "Preencha todos os campos!";
  }
}

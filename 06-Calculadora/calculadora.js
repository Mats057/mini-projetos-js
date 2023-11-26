const display = document.getElementById("display");
const buttons = document.getElementsByClassName("calculator-buttons");
var num1,
  num2,
  result = 0;
var op = "";
var novoNumber = false;
buttons[0].addEventListener("click", function (e) {
  CalculatorButtons(e.target);
});

const CalculatorButtons = (e) => {
  switch (e.id) {
    case "limparDisplay":
      display.innerText = "";
      break;
    case "tecla0":
    case "tecla1":
    case "tecla2":
    case "tecla3":
    case "tecla4":
    case "tecla5":
    case "tecla6":
    case "tecla7":
    case "tecla8":
    case "tecla9":
    case "decimal":
      display.innerText += e.innerText;
      break;
    case "backspace":
      display.innerText = display.innerText.slice(0, -1);
      break;
    case "inverter":
      display.innerText = parseFloat(display.innerText) * -1;
      break;
    case "operadorAdicionar":
    case "operadorSubtrair":
    case "operadorMultiplicar":
    case "operadorDividir":
      if (novoNumber) {
        num2 = display.innerText;
        Calculate();
        op = e.id;
        num1 = result;
      } else {
        op = e.id;
        num1 = display.innerText;
      }
      display.innerText = "";
      novoNumber = true;
      break;
    case "limparCalculo":
      num1, num2, (result = 0);
      op = "";
      display.innerText = "";
      break;
    case "igual":
      num2 = display.innerText;
      display.innerText = "";
      Calculate();
      break;
  }
};

const Calculate = () => {
  if (num1 == "" || num2 == "") {
    display.innerText = "Error";
  } else {
    num1 = num1.replace(",", ".");
    num2 = num2.replace(",", ".");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (op) {
      case "operadorAdicionar":
        result = num1 + num2;
        result = result.toString().replace(".", ",");
        display.innerText = result;
        num1, (num2 = 0);
        novoNumber = false;
        break;
      case "operadorSubtrair":
        result = num1 - num2;
        result = result.toString().replace(".", ",");
        display.innerText = result;
        num1, (num2 = 0);
        novoNumber = false;
        break;
      case "operadorMultiplicar":
        result = num1 * num2;
        result = result.toString().replace(".", ",");
        display.innerText = result;
        num1, (num2 = 0);
        novoNumber = false;
        break;
      case "operadorDividir":
        result = num1 / num2;
        result = result.toString().replace(".", ",");
        display.innerText = result;
        num1, (num2 = 0);
        novoNumber = false;
        break;
      case "":
        display.innerText = "Error";
        break;
    }
  }
};

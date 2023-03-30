var visor = document.querySelector(".visor");
var visorP = document.createElement("P");
var button = document.querySelectorAll(".button-box");

for (var i = 0; i < button.length; i++) {
  var element = button[i];
  captureClick(element);
}

visorP.textContent = "";
visor.appendChild(visorP);

function captureClick(value) {
  value.addEventListener("click", function () {
    showVisor(value.innerText);
  });
}

function showVisor(botao) {
  if (botao >= 0 || botao <= 9 || botao == ",") {
    visorP.textContent += botao;
  } else {
    switch (botao) {
      case "AC":
        visorP.textContent = "";
        break;
      case "=":
        result();
        break;
      case "x²":
        visorP.textContent += ` ${botao} `;
        result();
        break;
      case "√":
        visorP.textContent += ` ${botao} `;
        result();
        break;

      default:
        visorP.textContent += ` ${botao} `;
    }
  }
}

function result() {
  var replace = visorP.textContent.replaceAll(",", ".");
  var word = replace.split(" ");
  for (var i = 0; i < word.length; i++) {
    replace = operationAction(Number(word[0]), word[1], Number(word[2]));
  }
  replace = replace.toString();
  visorP.textContent = replace.replaceAll(".", ",");
}

function operationAction(number1, operator, number2) {
  var results;
  switch (operator) {
    case "*":
      return (results = number1 * number2);
      break;
    case "/":
      return (results = number1 / number2);
      break;
    case "x²":
      return (results = Math.pow(number1, 2));
      break;
    case "√":
      return (results = Math.sqrt(number1, 2));
      break;
    case "-":
      return (results = number1 - number2);
      break;
    case "+":
      return (results = number1 + number2);
      break;
    case "=":
      return results;
      break;

    default:
      return results;
      break;
  }
}

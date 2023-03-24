var visor = document.querySelector(".visor");
var visorP = document.createElement("P");
var button = document.querySelectorAll(".button-box");

for (var i = 0; i < button.length; i++) {
  var element = button[i];
  captureClick(element);
}
//console.log(button[9]);
visorP.textContent = "";
visor.appendChild(visorP);

function captureClick(value) {
  value.addEventListener("click", function () {
    showVisor(value.innerText);
  });
}

function showVisor(botao) {
  if (botao >= 0 || botao <= 9) {
    visorP.textContent += botao;
  } else if (botao === "AC") {
    visorP.textContent = "";
  } else if (botao === "=") {
    result();
  } else {
    visorP.textContent += ` ${botao} `;
  }
}

function result() {
  var word = visorP.textContent.split(" ");
  for (var i = 0; i < word.length; i++) {
    visorP.textContent = operationAction(
      Number(word[0]),
      word[1],
      Number(word[2])
    );
  }
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
    case "X²":
      console.log(Math.pow(number1, number2));
      return (results = Math.pow(number1, number2));
      break;
    case "√":
      return (results = Math.sqrt(number1, number2));
      break;
    case "-":
      return (results = number1 - number2);
      break;
    case "+":
      return (results = number1 + number2);
      break;
    case "=":
      results;
      break;

    default:
      return results;
      break;
  }
}

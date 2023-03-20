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
    if (value.innerText >= 0 || value.innerText <= 9) {
      console.log(value.innerText);
    }
    operationAction(value.innerText);
  });
}

function result(value) {
  var word = value.split("");
  for (var i = 0; i < word.length; i++) {
    return word[i];
  }
}

function operationAction(operator) {
  switch (operator) {
    case "AC":
      visorP.textContent = 0;
      break;
    case "*":
      visorP.textContent += "*";
      break;
    case "/":
      visorP.textContent += "/";
      break;
    case "X²":
      visorP.textContent += "^";
      break;
    case "√":
      visorP.textContent += "√";
      break;
    case "-":
      visorP.textContent += "-";
      break;
    case "+":
      visorP.textContent += "+";
      break;
    case "=":
      var results = result(visorP.textContent);
      console.log(results);
      //if (value.innerText >= 0 || value.innerText <= 9) {
      //}
      visorP.textContent = results;
      break;

    default:
      visorP.textContent += operator;
      break;
  }
}

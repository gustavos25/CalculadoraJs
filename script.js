var visor = document.querySelector(".visor");
var visorP = document.createElement("P");
var button = document.querySelectorAll(".button-box");

for (var i = 0; i < button.length; i++) {
  var element = button[i];
  capturarClick(element);
}
//console.log(button[9]);
visorP.textContent = "";
visor.appendChild(visorP);

function capturarClick(value) {
  value.addEventListener("click", function () {
    visorP.textContent = value.innerText;
    console.log("click", value.innerText);
  });
}

switch (key) {
  case "Ac":
    visorP.textContent = 0;
    break;
  case "*":
    visorP.textContent = 0;
    break;
  case "/":
    visorP.textContent = 0;
    break;
  case "X²":
    visorP.textContent = 0;
    break;
  case "√":
    visorP.textContent = 0;
    break;
  case "-":
    visorP.textContent = 0;
    break;
  case "+":
    visorP.textContent = 0;
    break;
  case "=":
    visorP.textContent = 0;
    break;

  default:
    break;
}

const buttons = document.querySelectorAll("button");
const dispay = document.querySelector(".display");

let calcArray = [];
let calcUStringu;

function buttonPress(button) {
  const pressedButton = button.textContent;
  if (pressedButton === "C") {
    const clearButtonSound = new Audio("/sounds/buttonpressclear.wav");
    clearButtonSound.play();
    calcArray = [];
    dispay.textContent = "";
  } 

  else if (pressedButton === "=") {
    dispay.textContent = eval(calcUStringu);
    const equalButtonSound = new Audio("sounds/buttonpressequals.wav");
    equalButtonSound.play();
  } 

  else {
    calcArray.push(pressedButton);
    calcUStringu = calcArray.join("");
    dispay.textContent = calcUStringu;
    const buttonSound = new Audio("sounds/buttonpress.wav");
    buttonSound.play();
  }
}

buttons.forEach(button => button.addEventListener("click", () => buttonPress(button)))
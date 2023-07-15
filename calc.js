let result = document.getElementById("result");

function buttonClicked(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  result.value = eval(result.value);
}

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function () {
    if (button.value === "AC") {
      clearResult();
    } else if (button.value === "=") {
      calculateResult();
    } else {
      buttonClicked(button.value);
    }
  });
}

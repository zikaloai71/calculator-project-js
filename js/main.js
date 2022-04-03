
function addition(prev, curr) {
  prev = prev + curr;
  return prev;
}

function multiplication(prev, curr) {
  prev = prev * curr;
  return prev;
}
function subtraction(prev, curr) {
  prev = prev * curr;
  return prev;
}
function division(prev, curr) {
  prev = prev / curr;
  return prev;
}

function operate(prev, operation, curr) {
  debugger;
  let total;
  switch (operation) {
    case "+": {
      total = addition(prev, curr);
      break;
    }
    case "-": {
      total = subtraction(prev, curr);
      break;
    }
    case "*": {
      total = multiplication(prev, curr);
      break;
    }
    case "/": {
      total = division(prev, curr);
      break;
    }
    default:
      return;
  }
  return total;
}

const display = document.querySelector("[data-input]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");


let operands1
let operands2

numberButtons.forEach((button) => {
 
  button.addEventListener("click", () => {
    if(button==numberButtons[0]){
      forms.answer.value += button.value;
     return (operands1 = parseFloat(button.value));
    }

    forms.answer.value += button.value;
    return (operands2 = parseFloat(button.value));
  });
});


let operator = operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    forms.answer.value += button.value;
    return (operator = button.value);
  });
});

allClearButton.addEventListener("click", () => {
  forms.answer.value = " ";
});

deleteButton.addEventListener("click", () => {
  forms.answer.value = forms.answer.value.substr(
    0,
    forms.answer.value.length - 1
  );
});

equalsButton.addEventListener("click", () => {
  debugger;
  let result = operate(operands1, operator, operands2);
  forms.answer.value = "";
  forms.answer.value = result;
});



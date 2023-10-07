function addition(prev, curr) {
  prev = prev + curr;
  return prev;
}

function multiplication(prev, curr) {
  prev = prev * curr;
  return prev;
}
function subtraction(prev, curr) {
  prev = prev - curr;
  return prev;
}
function division(prev, curr) {
  prev = prev / curr;
  return prev;
}

function operate(prev, operation, curr) {
  let total;
  let prevNum = parseFloat(prev)
  let currNum = parseFloat(curr)
  switch (operation) {
    case "+": {
      total = addition(prevNum, currNum);
      break;
    }
    case "-": {
      total = subtraction(prevNum, currNum);
      break;
    }
    case "x": {
      total = multiplication(prevNum, currNum);
      break;
    }
    case "÷": {
      total = division(prevNum, currNum);
      break;
    }
    default:
      return;
  }
  return total;
}

const display = forms.answer.value;
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");



numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if(forms.answer.value === "wrong mathematic input"){
      forms.answer.value = ""
      forms.answer.style.color="black"
    }
    else if (forms.answer.style.color="green"){
      forms.answer.style.color="black"
    }
    forms.answer.value += button.value;
  });
});

let operator = operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if(forms.answer.value === "wrong mathematic input"){
      forms.answer.value = ""
      forms.answer.style.color="black"
    }
    else if (forms.answer.style.color="green"){
      forms.answer.style.color="black"
    }
    forms.answer.value += " " +button.value+ " ";
    operator = button.value;
  });
});

allClearButton.addEventListener("click", () => {
  forms.answer.value = "";
});

deleteButton.addEventListener("click", () => {
  let tempStr = forms.answer.value.split(" ").join("")
  tempStr = tempStr.substr(
    0,
    tempStr.length - 1
  );
  forms.answer.value = tempStr
});

equalsButton.addEventListener("click", () => {
  let result = 0
  let prevResult=[]
  const [operators , numbers] = splitString(forms.answer.value)
  
  if(operators.length === 0){
    
    forms.answer.value = "wrong mathematic input"
    forms.answer.style.color="red"
  }
  else if(operators.length + 1 === numbers.length ){
    for(let i = 0 ; i < numbers.length  ; i++){
      if(prevResult.length > 0){
       result = operate(prevResult[0],operators[i-1],numbers[i])
       prevResult.pop()
       prevResult.push(result)
      }
      else{
        result = operate(numbers[i],operators[i],numbers[i+1])
        prevResult.push(result)
        i++;
      }
    }
    forms.answer.value = result;
    forms.answer.style.color="green"
  }
  else{
    forms.answer.value = "wrong mathematic input"
    forms.answer.style.color="red"
  }
 
});

function splitString(str){
  let operatorsSigns={
    "+":"+",
    "-":"-",
    "÷":"÷",
    "x":"x"
  }
  let operators = []
  let numbers = []
  for(let i = 0 ; i <str.length; i++){
    let current = str[i]
    if(operatorsSigns[current]){
     operators.push(current)
    }
    else{
      let num =current
      let index = i+1
      while(!operatorsSigns[str[index]] && index < str.length){
        num+=str[index]
        index++;
        i=index-1
      }
      numbers.push(num)
    }
  }
 return [operators,numbers]
}
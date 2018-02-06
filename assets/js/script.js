let screen = document.querySelector(".calculator__view__compute");
let calc = [];
let value = [];
let total = 0;

// Click Listeners 
createNumberListener(0, zero.id);
createNumberListener(1, one.id);
createNumberListener(2, two.id);
createNumberListener(3, three.id);
createNumberListener(4, four.id);
createNumberListener(5, five.id);
createNumberListener(6, six.id);
createNumberListener(7, seven.id);
createNumberListener(8, eight.id);
createNumberListener(9, nine.id);
createNumberListener(".", decimal.id);
createOperationListener("+", add.id);
createOperationListener("-", subtract.id);
createOperationListener("*", multiply.id);
createOperationListener("/", divide.id);
createOperationListener("=", equal.id);
createOperationListener("AC", clear.id);

// Keydown Listeners for adding "button-active" class
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "0": 
      createNumberResult(0, "zero");
      break;
    case "1": 
      createNumberResult(1, "one");
      break;
    case "2": 
      createNumberResult(2, "two");
      break;
    case "3": 
      createNumberResult(3, "three");
      break;
    case "4": 
      createNumberResult(4, "four");
      break;
    case "5": 
      createNumberResult(5, "five");
      break;
    case "6": 
      createNumberResult(6, "six");
      break;
    case "7": 
      createNumberResult(7, "seven");
      break;
    case "8": 
      createNumberResult(8, "eight");
      break;
    case "9": 
      createNumberResult(9, "nine");
      break;
    case ".": 
      createNumberResult(".", "decimal");
      break;
    case "+": 
      createOperationResult("+", "add");
      break;
    case "-": 
      createOperationResult("-", "subtract");
      break;
    case "*": 
      createOperationResult("*", "multiply");
      break;
    case "/": 
      createOperationResult("/", "divide");
      break;
    case "Enter":
      createOperationResult("=", "equal");
      break;
    case "Escape": 
      createOperationResult("AC", "clear");
      break;
  }
});

// Keyup Listeners for toggling "button-active" class
document.addEventListener('keyup', (event) => {
  switch (event.key) {
    case "0": 
      keyupEventHelper("zero");
      break;
    case "1": 
      keyupEventHelper("one");
      break;
    case "2": 
      keyupEventHelper("two");
      break;
    case "3": 
      keyupEventHelper("three");
      break;
    case "4": 
      keyupEventHelper("four");
      break;
    case "5":  
      keyupEventHelper("five");
      break;
    case "6":  
      keyupEventHelper("six");
      break;
    case "7":  
      keyupEventHelper("seven");
      break;
    case "8":  
      keyupEventHelper("eight");
      break;
    case "9":  
      keyupEventHelper("nine");
      break;
    case ".":  
      keyupEventHelper("decimal");
      break;
    case "+": 
      keyupEventHelper("add");
      break;
    case "-":
      keyupEventHelper("subtract");
      break;
    case "*": 
      keyupEventHelper("multiply");
      break;
    case "/": 
      keyupEventHelper("divide");
      break;
    case "Enter":
      keyupEventHelper("equal");
      break;
    case "Escape": 
      keyupEventHelper("clear");
      break;
  }
})

// Helper Functions
function keyupEventHelper(selector) {
  return document.getElementById(selector).classList.toggle("button-active");
}

function operationResultHelper(operator, selector) {
  if (total) {
    selector ? document.getElementById(selector).classList.add("button-active"): null;
    return ( 
      calc.push(total),
      total = 0,
      calc.push(operator),
      screen.append(operator),
      value = []
    )
  } 
  else {
    selector ? document.getElementById(selector).classList.add("button-active"): null;
    return (
      calc.push(Number(value.join(""))),
      calc.push(operator),
      screen.append(operator),
      value = []
    )
  }
}

// Listener Reaction Functions
function createNumberResult(number, selector) {
  selector ? document.getElementById(selector).classList.add("button-active") : null;
  return (
    value.push(number),
    screen.append(number)
  )
}

function createOperationResult(operator, selector) {
  switch(operator) {
    case "+":
      operationResultHelper(operator, selector);
      break;
    case "-":
      operationResultHelper(operator, selector);
      break;
    case "*":
      operationResultHelper(operator, selector);
      break;
    case "/":
      operationResultHelper(operator, selector);
      break;
    case "=":
      selector ? document.getElementById(selector).classList.add("button-active") : null;
      calc.push(Number(value.join("")));

      // While the calc array still has operations to do...
      while(calc.length !== 1) {
        // If index and index+1 are both numbers, slice them into "cut" and cut from calc array
        calc.forEach( (ele, index) => {
          if (typeof calc[index] === typeof calc[index+1]) {
            let cut = calc.slice(index, index+2).join("");
            calc.splice(index, 3, cut);
          }
        })
        // If multiplication or division ocurs, carry out the operation
        calc.forEach( (element, index) => {
          if (element === "*") {
            let calculation = calc[index-1] * calc[index+1];
            calc.splice(index-1, 3, calculation);
            total = calculation;
          } else if (element === "/") {
            let calculation = calc[index-1] / calc[index+1];
            calc.splice(index-1, 3, calculation); 
            total = calculation;
          }
        })
        // If addition or subtraction occurs, carry out the operation
        calc.forEach( (element, index) => {
          if (element === "+") {
            let calculation = calc[index-1] + calc[index+1];
            calc.splice(index-1, 3, calculation);
            total = calculation;
          } else if (element === "-") {
            let calculation = calc[index-1] - calc[index+1];
            calc.splice(index-1, 3, calculation);
            total = calculation;
          }
        })
      }
      screen.innerHTML = total;
      calc = [];
      value = [];
      break;
    case "AC":
      selector ? document.getElementById(selector).classList.add("button-active") : null;
      calc = [];
      value = [];
      total = 0;
      screen.innerHTML = "";
      break;
  }
}

// Listener Creator Functions
function createNumberListener(number, selector) {
  let createSelector = document.getElementById(selector);
  return (
    createSelector.addEventListener("click", (event) => {
      createNumberResult(number);
    })
  )
}

function createOperationListener(operator, selector) {
  let createSelector = document.getElementById(selector);
  return (
    createSelector.addEventListener("click", (event) => {
      createOperationResult(operator);
    })
  )
}
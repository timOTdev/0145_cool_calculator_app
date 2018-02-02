let screen = document.querySelector(".calculator__view__compute");
let calc = [];
let total = 0;

function createNumberResult(number) {
  return (
    calc.push(number),
    screen.append(number),
    console.log(calc)
  )
}

function createNumberListener(selector, number) {
  let createSelector = document.querySelector(`#${selector}`);
  return (
    createSelector.addEventListener("click", (event) => {
      createNumberResult(number);
    })
  )
}

function createOperationResult(operator) {
  switch(operator) {
    case "+":
      screen.append(operator);
      calc.push(operator);
      console.log(calc);
      break;
    case "-":
      screen.append(operator);
      calc.push(operator);
      console.log(calc);
      break;
    case "*":
      screen.append(operator);
      calc.push(operator);
      console.log(calc);
      break;
    case "/":
      screen.append(operator);
      calc.push(operator);
      console.log(calc);
      break;
    case "=":
      while(calc.length !== 1) {
        // calc.forEach( (element, index) => {
        //   if (typeof index === "number" && typeof index+1 === "number") {
        //     let join = calc.slice(index, 1);
        //     console.log(join);
        //   }
        // })
        calc.forEach( (element, index) => {
          if (element === "*") {
            let calculation = calc[index-1] * calc[index+1];
            calc.splice(index-1, 3, calculation);
          }
        })
        
        calc.forEach( (element, index) => {
          if (element === "/") {
            let calculation = calc[index-1] / calc[index+1];
            calc.splice(index-1, 3, calculation);
          }
        })
        
        calc.forEach( (element, index) => {
          if (element === "+") {
            let calculation = calc[index-1] + calc[index+1];
            calc.splice(index-1, 3, calculation);
          }
        })
        
        calc.forEach( (element, index) => {
          if (element === "-") {
            let calculation = calc[index-1] - calc[index+1];
            calc.splice(index-1, 3, calculation);
          }
        })
      }
      console.log(calc);
      screen.innerHTML = calc[0];
      break;
    case "⌫":
      calc.splice(-1, 1);
      screen.innerHTML = calc.join("");
      break;
    case "AC":
      calc = [];
      screen.innerHTML = "";
      break;
  }
}

function createOperationListener(selector, operator) {
  let createSelector = document.querySelector(`#${selector}`);
  return (
    createSelector.addEventListener("click", (event) => {
      createOperationResult(operator);
    })
  )
}

// Click Listeners
createNumberListener(zero.id, 0);
createNumberListener(one.id, 1);
createNumberListener(two.id, 2);
createNumberListener(three.id, 3);
createNumberListener(four.id, 4);
createNumberListener(five.id, 5);
createNumberListener(six.id, 6);
createNumberListener(seven.id, 7);
createNumberListener(eight.id, 8);
createNumberListener(nine.id, 9);
createOperationListener(add.id, "+");
createOperationListener(subtract.id, "-");
createOperationListener(multiply.id, "*");
createOperationListener(divide.id, "/");
createOperationListener(equal.id, "=")
createOperationListener(backspace.id, "⌫")
createOperationListener(clear.id, "AC")

// Keypress Listeners
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "0": 
      createNumberResult(0);
      break;
    case "1": 
      createNumberResult(1);
      break;
    case "2": 
      createNumberResult(2);
      break;
    case "3": 
      createNumberResult(3);
      break;
    case "4": 
      createNumberResult(4);
      break;
    case "5": 
      createNumberResult(5);
      break;
    case "6": 
      createNumberResult(6);
      break;
    case "7": 
      createNumberResult(7);
      break;
    case "8": 
      createNumberResult(8);
      break;
    case "9": 
      createNumberResult(9);
      break;
    case "+": 
      createOperationResult("+");
      break;
    case "-": 
      createOperationResult("-");
      break;
    case "*": 
      createOperationResult("*");
      break;
    case "/": 
      createOperationResult("/");
      break;
    case "Enter":
      createOperationResult("=");
      break;
    case "Backspace":
      createOperationResult("⌫");
      break;
    case "Escape": 
      createOperationResult("AC");
      break;
  }
});
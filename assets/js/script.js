let compute = document.querySelector(".calculator__view__compute");
let result = document.querySelector(".calculator__view__result");
let computeHistory = "";
let resultHistory;

function createNumberResult(num) {
  return (
    resultHistory = "",
    compute.append(num),
    computeHistory += num,
    console.log(computeHistory)
  )
}

function createOperationResult(character) {
  if (resultHistory) {
    compute.innerHTML = "",
    computeHistory = "",
    resultHistory + character,
    computeHistory = resultHistory + character,
    compute.innerHTML += resultHistory + character
  } else {
    computeHistory += character;
    compute.append(character);
  }
  console.log(computeHistory);
}

function createNumberListener(selector, character) {
  let createSelector = document.querySelector(`#${selector}`);
  return (
    createSelector.addEventListener("click", (event) => {
      createNumberResult(character);
    })
  )
}

function createOperationListener(selector, character) {
  let createSelector = document.querySelector(`#${selector}`);
  return (
    createSelector.addEventListener("click", (event) => {
      createOperationResult(character);
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
createNumberListener(decimal.id, ".");
createOperationListener(add.id, "+");
createOperationListener(subtract.id, "-");
createOperationListener(multiply.id, "*");
createOperationListener(divide.id, "/");

equal.addEventListener("click", (event) => {
  resultHistory = eval(computeHistory);
  console.log(resultHistory);
  result.innerHTML = resultHistory;

  if (Math.sign(resultHistory) === 1) {
    result.setAttribute("style","color: green;");
  } 
  else if (Math.sign(resultHistory) === -1) {
    result.setAttribute("style","color: red;");
  } 
  else if (Math.sign(resultHistory) === 0) {
    result.setAttribute("style", "color: yellow;")
  }
}) 
backspace.addEventListener("click", (event) => {
  computeHistory = computeHistory.slice(0, -1);
  compute.innerHTML = computeHistory;
  console.log(computeHistory);
})
clearAll.addEventListener("click", (event) => {
  compute.innerHTML = "";
  result.innerHTML = "";
  resultHistory = "";
  computeHistory = "";
  console.log(resultHistory);
})
clearCompute.addEventListener("click", (event) => {
  compute.innerHTML = "";
  computeHistory = "";
  resultHistory = "";
  console.log(resultHistory);
})

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
    case ".":
      createNumberResult("."); 
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
      resultHistory = eval(computeHistory);
      console.log(resultHistory);
      result.innerHTML = resultHistory;
    
      if (Math.sign(resultHistory) === 1) {
        result.setAttribute("style","color: green;");
      } 
      else if (Math.sign(resultHistory) === -1) {
        result.setAttribute("style","color: red;");
      } 
      else if (Math.sign(resultHistory) === 0) {
        result.setAttribute("style", "color: yellow;")
      }
      break;

    case "Backspace":
      computeHistory = computeHistory.slice(0, -1);
      compute.innerHTML = computeHistory;
      console.log(computeHistory);
      break;
  }
});

window.onkeydown = (event) => {
  if ( event.keyCode == 27 ) {
    compute.innerHTML = "";
    result.innerHTML = "";
    resultHistory = "";
    computeHistory = "";
    console.log(resultHistory);
  }
};
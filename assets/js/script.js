let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let viewScreen = document.querySelector(".calculator__view");
let frontstage = document.querySelector(".calculator__view__screen");
let backstage = "";

// Click Listeners
zero.addEventListener("click", (event) => {
  backstage += 0;
  frontstage.append("0");
  console.log(backstage);
})
one.addEventListener("click", (event) => {
  backstage += 1;
  frontstage.append("1");
  console.log(backstage);
})
two.addEventListener("click", (event) => {
  backstage += 2;
  frontstage.append("2");
  console.log(backstage);
})
three.addEventListener("click", (event) => {
  backstage += 3;
  frontstage.append("3");
  console.log(backstage);
})
four.addEventListener("click", (event) => {
  backstage += 4;
  frontstage.append("4");
  console.log(backstage);
})
five.addEventListener("click", (event) => {
  backstage += 5;
  frontstage.append("5");
  console.log(backstage);
})
six.addEventListener("click", (event) => {
  backstage += 6;
  frontstage.append("6");
  console.log(backstage);
})
seven.addEventListener("click", (event) => {
  backstage += 7;
  frontstage.append("7");
  console.log(backstage);
})
eight.addEventListener("click", (event) => {
  backstage += 8;
  frontstage.append("8");
  console.log(backstage);
})
nine.addEventListener("click", (event) => {
  backstage += 9;
  frontstage.append("9");
  console.log(backstage);
})
add.addEventListener("click", (event) => {
  backstage += "+";
  frontstage.append("+");
  console.log(backstage);
})
subtract.addEventListener("click", (event) => {
  backstage += "-";
  frontstage.append("-");
  console.log(backstage);
})
multiply.addEventListener("click", (event) => {
  backstage += "*";
  frontstage.append("×");
  console.log(backstage);
})
divide.addEventListener("click", (event) => {
  backstage += "/";
  frontstage.append("÷");
  console.log(backstage);
})
decimal.addEventListener("click", (event) => {
  backstage += ".";
  frontstage.append(".");
  console.log(backstage);
})
equal.addEventListener("click", (event) => {
  backstage = eval(backstage);
  frontstage.innerHTML = backstage;
  if (Math.sign(backstage) === 1) {
    viewScreen.setAttribute("style","background: green;");
  } 
  else if (Math.sign(backstage) === -1) {
    viewScreen.setAttribute("style","background: red;");
  } else if (Math.sign(backstage) === 0) {
    viewScreen.setAttribute("style", "background: yellow; color: black;")
  }
  console.log(backstage);
})
backspace.addEventListener("click", (event) => {
  backstage = backstage.slice(0, -1);
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
clear.addEventListener("click", (event) => {
  backstage = "";
  frontstage.innerHTML = "";
  viewScreen.setAttribute("style","background: none; color: none;");
  console.log(backstage);
})

// Keypress Listeners
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "0":
      backstage += 0;
      frontstage.append("0");
      break;
    case "1":
      backstage += 1;
      frontstage.append("1");
      console.log(backstage);
      break;
    case "2":
      backstage += 2;
      frontstage.append("2");
      console.log(backstage);
      break;
    case "3":
      backstage += 3;
      frontstage.append("3");
      console.log(backstage);
      break;
    case "4":
    backstage += 4;
      frontstage.append("4");
      console.log(backstage);
      break;
    case "5":
      backstage += 5;
      frontstage.append("5");
      console.log(backstage);
      break;
    case "6":
      backstage += 6;
      frontstage.append("6");
      console.log(backstage);
      break;
    case "7":
      backstage += 7;
      frontstage.append("7");
      console.log(backstage);
      break;
    case "8":
      backstage += 8;
      frontstage.append("8");
      console.log(backstage);
      break;
    case "9":
      backstage += 9;
      frontstage.append("9");
      console.log(backstage);
      break;
    case "+":
      backstage += "+";
      frontstage.append("+");
      break;
    case "-":
      backstage += "-";
      frontstage.append("-");
      break;
    case "*":
      backstage += "*";
      frontstage.append("×");
      break;
    case "/":
      backstage += "/";
      frontstage.append("÷");
      break;
    case ".":
      backstage += ".";
      frontstage.append(".");
      break;
    case "Enter":
      backstage = eval(backstage);
      frontstage.innerHTML = backstage;
      if (Math.sign(backstage) === 1) {
        viewScreen.setAttribute("style","background: green;");
      } 
      else if (Math.sign(backstage) === -1) {
        viewScreen.setAttribute("style","background: red;");
      } else if (Math.sign(backstage) === 0) {
        viewScreen.setAttribute("style", "background: yellow; color: black;")
      }
      break;
    case "Backspace":
      backstage = backstage.slice(0, -1);
      frontstage.innerHTML = backstage;
      break;
    case "Clear":
      backstage = "";
      frontstage.innerHTML = "";
      viewScreen.setAttribute("style","background: none; color: none;");
      break;
  }
});

window.onkeydown = (event) => {
  if ( event.keyCode == 27 ) {
    backstage = "";
    frontstage.innerHTML = "";
    viewScreen.setAttribute("style","background: none; color: none;");
  }
};
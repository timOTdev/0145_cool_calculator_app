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
let frontstage = document.querySelector(".calculator__view__screen");
let backstage = "";

// Click Listeners
zero.addEventListener("click", (event) => {
  backstage += 0;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
one.addEventListener("click", (event) => {
  backstage += 1;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
two.addEventListener("click", (event) => {
  backstage += 2;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
three.addEventListener("click", (event) => {
  backstage += 3;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
four.addEventListener("click", (event) => {
  backstage += 4;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
five.addEventListener("click", (event) => {
  backstage += 5;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
six.addEventListener("click", (event) => {
  backstage += 6;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
seven.addEventListener("click", (event) => {
  backstage += 7;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
eight.addEventListener("click", (event) => {
  backstage += 8;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
nine.addEventListener("click", (event) => {
  backstage += 9;
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
add.addEventListener("click", (event) => {
  backstage += "+";
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
subtract.addEventListener("click", (event) => {
  backstage += "-";
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
multiply.addEventListener("click", (event) => {
  backstage += "*";
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
divide.addEventListener("click", (event) => {
  backstage += "/";
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
decimal.addEventListener("click", (event) => {
  backstage += ".";
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
equal.addEventListener("click", (event) => {
  console.log("equal button pressed");
})
backspace.addEventListener("click", (event) => {
  backstage = backstage.slice(0, -1);
  frontstage.innerHTML = backstage;
  console.log(backstage);
})
clear.addEventListener("click", (event) => {
  backstage = "";
  frontstage.innerHTML = backstage;
})

// Keypress Listeners
document.addEventListener('keypress', (event) => {
  console.log(event.key);
  switch (event.key) {
    case "0":
      frontstage.innerHTML += "0";
      backstage += 0;
      break;
    case "1":
      frontstage.innerHTML += "1";
      backstage += 1;
      console.log(backstage);
      break;
    case "2":
      frontstage.innerHTML += "2";
      backstage += 2;
      console.log(backstage);
      break;
    case "3":
      frontstage.innerHTML += "3";
      backstage += 3;
      console.log(backstage);
      break;
    case "4":
      frontstage.innerHTML += "4";
      backstage += 4;
      console.log(backstage);
      break;
    case "5":
      frontstage.innerHTML += "5";
      backstage += 5;
      console.log(backstage);
      break;
    case "6":
      frontstage.innerHTML += "6";
      backstage += 6;
      console.log(backstage);
      break;
    case "7":
      frontstage.innerHTML += "7";
      backstage += 7;
      console.log(backstage);
      break;
    case "8":
      frontstage.innerHTML += "8";
      backstage += 8;
      console.log(backstage);
      break;
    case "9":
      frontstage.innerHTML += "9";
      backstage += 9;
      console.log(backstage);
      break;
    case "+":
    frontstage.innerHTML += "+";
      backstage += "+";
      break;
    case "-":
      frontstage.innerHTML += "-";
      backstage += "-";
      break;
    case "*":
      frontstage.innerHTML += "×";
      backstage += "*";
      break;
    case "/":
      frontstage.innerHTML += "÷";
      backstage += "/";
      break;
    case ".":
      frontstage.innerHTML += ".";
      backstage += ".";
      break;
    case "Enter":
      console.log("Enter");
      break;
    case "Backspace":
      console.log("Backspace");
      break;
    case "Clear":
      frontstage.innerHTML = "";
      backstage = "";
      break;
  }
});
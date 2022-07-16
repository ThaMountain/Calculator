let calcBody = document.querySelector(".calc-body");
let calcScreen = document.querySelector(".calc-screen");
let btnNum1 = document.querySelector(".btn-num1");
let btnNum2 = document.querySelector(".btn-num2");
let btnNum3 = document.querySelector(".btn-num3");
let btnNum4 = document.querySelector(".btn-num4");
let btnNum5 = document.querySelector(".btn-num5");
let btnNum6 = document.querySelector(".btn-num6");
let btnNum7 = document.querySelector(".btn-num7");
let btnNum8 = document.querySelector(".btn-num8");
let btnNum9 = document.querySelector(".btn-num9");
let btnNum0 = document.querySelector(".btn-num0");
let btnMinus = document.querySelector(".btn-minus");
let btnAdd = document.querySelector(".btn-add");
let btnMult = document.querySelector(".btn-mult");
let btnDivide = document.querySelector(".btn-divide");
let btnEnter = document.querySelector(".btn-enter");
let btnAC = document.querySelector(".btn-AC"); //assigns variables to calculator buttons
let myArray = [];
let newArr = [];
let answer = 0; //declares variables for calculation

document.querySelectorAll(".btn-num").forEach((e) => {
  e.addEventListener("click", () => {
    myArray.push(e.innerText);
    if (calcScreen.innerText.length != 0) {
      calcScreen.innerText = calcScreen.innerText + " " + e.innerText;
    } else {
      calcScreen.innerText = calcScreen.innerText + e.innerText;
    }
    console.log(myArray);
  });
}); //adds event listener for each number button. pushes each numbers text into my array when pressed.

document.querySelectorAll(".btn-oper").forEach((e) => {
  e.addEventListener("click", () => {
    newArr.push(parseInt(myArray.join("")));
    newArr.push(e.innerText);
    myArray = [];
    calcScreen.innerText = calcScreen.innerText + " " + e.innerText;
    console.log(newArr);
  });
}); //event listener for each operator button. When pressed myArray's number strings are collapsed down to form one number string, then converted to an int and pushed into newArr. myArray is then reset.

btnEnter.addEventListener("click", () => {
  calculate(newArr);

  console.log(newArr);
  calcScreen.innerText = answer.toString();
}); //Adds event listener to the enter button. When pressed it runs the calculate() function then resets newArr.

btnAC.addEventListener("click", () => {
  newArr = [];
  myArray = [];
  answer = 0;
  calcScreen.innerText = "";
}); // Resets newArr, myArray, and answer.

function add(firstNum, secondNum) {
  return firstNum + secondNum;
} //function that adds two values together

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
} //function that subtracts one value from another.

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
} //function that multiply's one value against another

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
} //function that divides one value by another.

function calculate(newArr) {
  newArr.push(parseInt(myArray.join(""))); //takes myArray and concates the single digit strings together into one multidigit string, then parses that into an integer.
  answer = newArr[0];

  for (let i = 1; i < newArr.length; i++) {
    //loops through newArr
    if (newArr[i] == "+") {
      answer = add(answer, newArr[i + 1]);
    } //runs the add function with answer and the number in front of the operator.
    else if (newArr[i] == "-") {
      answer = subtract(answer, newArr[i + 1]);
    } //runs the subtract function with answer and the number in front of the operator.
    else if (newArr[i] == "*") {
      answer = multiply(answer, newArr[i + 1]);
    } //runs the multiply function with answer and the number in front of the operator.
    else if (newArr[i] == "/") {
      answer = divide(answer, newArr[i + 1]);
    } //runs the divide function with answer and the number in front of the operator.
  }
  console.log(answer);
  return answer;
}

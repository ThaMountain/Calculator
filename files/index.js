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
let btnAC = document.querySelector(".btn-AC");
let num1;
let num2;
let operator;

function pushNum1(element) {
  num1 = parseInt(element.innerText);
}

function pushNum2(element) {
  num2 = parseInt(element.innerText);
}

function parseOper() {}

let firstnum = [];
let secondnum = [];

var element = document.body;
var operand = "";
var dots = "";
let ans = "";

let num1 = 0;
let num2 = 0;

function numberClick(_val) {
  console.log(_val);
  if (operand.length == 1) {
    secondnum.push(_val);
    num2 = parseFloat(secondnum.join(""));
    document.getElementById("display").innerText = num2;
  } else {
    // console.log(firstnum);
    firstnum.push(_val);
    num1 = parseFloat(firstnum.join(""));
    document.getElementById("display").innerText = num1;
  }
}

function calculation() {
  if (operand == "+") {
    ans = num1 + num2;
  } else if (operand == "*") {
    ans = num1 * num2;
  } else if (operand == "-") {
    ans = num1 - num2;
  } else if (operand == "÷") {
    ans = num1 / num2;
  }

  if (num2 == "") {
    document.getElementById("display").innerText = "Error";
  }

  document.getElementById("display").innerText = ans;
  console.log(ans);
}

function clearAll() {
  firstnum = [];
  secondnum = [];
  operand = "";
  document.getElementById("display").innerText = "‎";
}

function percentage() {
  if (operand.length == 1) {
    if (num2 > 100) {
      document.getElementById("display").innerText = "Error";
    } else {
      num2 = num2 / 100;
      secondnum.push(num2);
      document.getElementById("display").innerText = num2;
      console.log(num2);
    }
  } else {
    if (num1 > 100 || num1 < 0 || num2 < 0 || num2 > 100) {
      document.getElementById("display").innerText = "Error";
    } else {
      num1 = num1 / 100;
      firstnum.push(num1);
      document.getElementById("display").innerText = num1;
      console.log(num1);
    }
  }
}

function dot(_val) {
  if (operand.length == 1) {
    secondnum.push(_val);
    num2 = parseFloat(secondnum.join(""));
    document.getElementById("display").innerText = num2;
  } else {
    firstnum.push(_val);
    num1 = parseFloat(firstnum.join(""));
  }

  if (dots.length > 1) {
    document.getElementById("display").innerText = "Error";
  }
}

function setOperator(op) {
  console.log(op);
  operand = op;
  document.getElementById("display").innerText = operand;
}

function plusMinus(_val) {
  if (operand.length == 1) {
    secondnum.push(_val);
    num2 *= -1;
    document.getElementById("display").innerText = num2;
  } else {
    firstnum.push(_val);
    num1 *= -1;
    document.getElementById("display").innerText = num1;
  }
}

function lightDark() {
  var element = document.body;
  element.classList.toggle("change_background");
}

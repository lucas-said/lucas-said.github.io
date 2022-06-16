let firstnum = [];
let secondnum = [];

var operand = "";

let ans = "";

function numberClick(_val) {
  console.log(_val);

  if (operand.length == 1) {
    secondnum.push(_val);
  } else {
    // console.log(firstnum);
    firstnum.push(_val);
  }
}

function setOperator(op) {
  console.log(op);

  operand = op;
}

function calculation() {

  let num1 = parseInt(firstnum.join(''));
  let num2 = parseInt(secondnum.join(''));

  if (operand == "+") {
    ans = num1 + num2;
  } else if (operand == "*") {
    ans = num1 * num2;
  } else if (operand == "-") {
    ans = num1 - num2;
  } else if (operand == "/") {
    ans = num1 / num2;
  }

  document.getElementById("display").innerText=ans;
  console.log(ans);
}

function clearAll() {
  firstnum = [];
  secondnum = [];
  operand = '';
}
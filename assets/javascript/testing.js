// let plus = false

let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));


// function plus_detector(){
//     plus = true
// }

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){

//             case 'C':
//                 display.innerText = '‎'
//                 break;

//             case '=':
//                 if (plus == true){
                    
//                 }

//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });


let firstnum = [];
let secondnum = [];

let operand = [];
operand.length = 1;

let ans = '';

function numberClick(_val){
    console.log(_val);

     firstnum.push(_val)
}



function setOperator(){

    function division(){
        operand.push("/")
    }

    function times(){
        operand.push("*")
    }

    function minus(){
        operand.push("-")
    }

    function plus(){
        operand.push("+")
    }
}

function calculation(){

    let num1 = firstnum.join();
    let num2 = secondnum.join();

    if (operand == '+'){

       ans = num1+num2;

    } else if (operand == '*'){

        ans = num1*num2;

    } else if (operand == '-'){

        ans = num1-num2;

    } else if (operand == '/'){

        ans = num1/num2;

    }

}



// setOperator()
// calculation()
let plus = false

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));


function plus_detector(){
    plus = true
}

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){

            case 'C':
                display.innerText = '‎'
                break;

            case '=':
                if (plus == true){
                    
                }

            default:
                display.innerText += e.target.innerText;
        }
    });
});
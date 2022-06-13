let display = document.getElementById('output_calc');

let buttons = Array.from(document.getElementsByClassName('grid-item'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
    switch(e.target.innerText){
        default:
            display.innerText += e.target.innerText;
    }
    });

});
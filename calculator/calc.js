const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(
    function (button){
        button.addEventListener("click", calculate);
    }
);

function calculate(event) {
    const clickedValue = event.target.value;
    if(clickedValue === "="){
        if(display.value !== ""){
            display.value = eval(display.value);
        }
    } else if (clickedValue === "C"){
        display.value = "";
    } else{
        display.value += clickedValue;
    }
}
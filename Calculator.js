//Function of button click

const text = document.getElementById('text');

function appendToDisplay(input){
    text.value += input;
}
function clearDisplay(){
    text.value = "";
}

function calculateResult(){
    try{text.value = eval(text.value);
    }catch(error){
        text.value = "Error";}
    }
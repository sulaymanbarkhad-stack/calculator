const display = document.querySelector("#display");

function appendToDisplay(input){
 display.value += input;
};

function clearToDisplay(){
display.value = "";
};


function calculateToDisplay(){
try{
    display.value = eval(display.value);
}

catch(error){
display.value = "error";
}
}
let display = document.querySelector('.display');
let buttonContainer = document.querySelector('#buttons-container');

const buttons = ['AC','c','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','00','.','='];

buttons.forEach((btn)=>{
    const button = document.createElement('button');
    button.innerText = btn;

    if(btn === "AC"){
        button.classList.add("action");
        button.onclick = () => clearDisplay();

    }else if(btn === "c"){
        button.classList.add("action");
        button.onclick = () => clearLastChar();

    }else if(btn === "="){
        button.classList.add("equals");
        button.onclick = () => calculate();

    }else if(btn === "c"){
        button.classList.add("clear");

    }else if(['+','-','*','/','%'].includes(btn)){
        button.classList.add("operator");
        button.onclick = () => append(btn);

    }else{
        button.onclick = () => append(btn);
        button.classList.add("number");
    }

    buttonContainer.appendChild(button);
   
});

function append(value){
    if(display.innerText === "0" && value !== "."){
        display.innerText = value;
    }else if(display.innerText === "0" && value === "."){
        display.innerText = "0.";
    }else{
        display.innerText += value;
    }
}

function clearDisplay(){
    display.innerText = "0";
}

function clearLastChar(){
    if(display.innerText.length === 1){
        display.innerText = "0";
    }else{
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate(){
    const result = eval(display.innerText.replace('%','*0.01'));
    display.innerText = result;
}
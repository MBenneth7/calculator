const zero =  document.querySelector(".zero");
const one =  document.querySelector(".one");
const two =  document.querySelector(".two");
const three =  document.querySelector(".three");
const four =  document.querySelector(".four");
const five =  document.querySelector(".five");
const six =  document.querySelector(".six");
const seven =  document.querySelector(".seven");
const eight =  document.querySelector(".eight");
const nine =  document.querySelector(".nine");
const decimal =  document.querySelector(".decimal");
const equal =  document.querySelector(".equal"); 
const add =  document.querySelector(".add");
const subtract =  document.querySelector(".subtract");
const multiply =  document.querySelector(".multiply");
const divide =  document.querySelector(".divide");
const percent =  document.querySelector(".percent");
const negPos =  document.querySelector(".neg-pos");
const reset =  document.querySelector(".reset");

//VARIABLES TO DISPLAY CURRENT NUMBER ON SCREEN AND CONTAIN OUR CURRENT ANSWER
let display = "0";
let ans = 0;

//KEEP TRACK OF FIRST TWO INITIAL NUMBERS TO START OFF
let first = 0;
let second = 0;

//HAVE A VARIABLE KEEP TRACK OF AN OPERATOR
let operator = "";

function returnZero(){
    zero.addEventListener("click",()=>{
    display += "0";
    console.log(display);
    });
}

function returnOne(){
    one.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "1";
        else{
            display += "1";
        }     
        console.log(display);
    });
}

function returnTwo(){
    two.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "2";
        else{
            display += "2";
        }     
        console.log(display);
    });
}

function returnThree(){
    three.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "3";
        else{
            display += "3";
        }     
        console.log(display);
    });
}

function returnFour(){
    four.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "4";
        else{
            display += "4";
        }     
        console.log(display);
    });
}

function returnFive(){
    five.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "5";
        else{
            display += "5";
        }     
        console.log(display);
    });
}

function returnSix(){
    six.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "6";
        else{
            display += "6";
        }     
        console.log(display);
    });
}

function returnSeven(){
    seven.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "7";
        else{
            display += "7";
        }     
        console.log(display);
    });
}

function returnEight(){
    eight.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "8";
        else{
            display += "8";
        }     
        console.log(display);
    });
}

function returnNine(){
    nine.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(display === "0")
            display = "9";
        else{
            display += "9";
        }     
        console.log(display);
    });
}

function reSet(){
    reset.addEventListener("click",()=>{
        display = "0";
        console.log(display);
    });
}

function sum (a,b){
    return a + b;
}

function difference(a,b){
    return a - b;
}

function product(a,b){
    return a * b;
}

function quotient(a,b){
    if(b===0)
        return "DNE";
    else    
        return a/b;
}

function operate(operator,num1,num2){
    
}


returnZero();
returnOne();
returnTwo();
returnThree();
returnFour();
returnFive();
returnSix();
returnSeven();
returnEight();
returnNine();
reSet();





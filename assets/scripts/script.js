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

//ARRAY AND TO KEEP TRACK OF NUMBERS BEING INPUT BY USER, OUR ARRAY WILL HOLD TWO NUMBERS AT MOST.
const numbers = [];

//VARIABLES TO DISPLAY CURRENT NUMBER ON SCREEN AND CONTAIN OUR CURRENT ANSWER
let display = "0";
let ans = 0;


//HAVE A VARIABLE KEEP TRACK OF AN OPERATOR
let operator = "";

function returnNumbersOperators(){

    zero.addEventListener("click",()=>{
        if(display === "0")
            display = "0";
        else{        
            display += "0";
        }    
        console.log(display);
    });

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

    reset.addEventListener("click",()=>{
        display = "0";
        numbers.length = 0;
        console.log(display);
    });

    add.addEventListener("click",()=>{

        let current = Number(display);
        operator = "+";

        if(numbers.length < 1){
            //ON THE FIRST START 'numbers' ARRAY LENGTH IS "0", WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE FIRST NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
            numbers.push(current);
            display = "0";
        }    
        else{
            //ON CONSECTIVE USE, WE WILL USE 'unshift()' TO PLACE SECOND NUMBER INTO THE BEGINNING OF ARRAY THAT WAY WHEN WE 'pop()' IT WILL
            //GRAB OUR FIRST NUMBER ENTERED.

            numbers.push(current);
            display = "0";

            //TAKING OUT TWO NUMBERS TO PERFORM OUR OPERATIONS ON IT    
            let first = numbers.pop();
            let second = numbers.pop();

            //NUMBERS ARRAY IS CURRENTLY AT LENGTH "0"
            operate(operator, first, second);
        }    
    });

    multiply.addEventListener("click",()=>{

        let current = Number(display);
        operator = "*";

        if(numbers.length < 1){
            //ON THE FIRST START 'numbers' ARRAY LENGTH IS "0", WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE FIRST NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
            numbers.push(current);
            display = "0";
        }    
        else{
            //ON CONSECTIVE USE, WE WILL USE 'unshift()' TO PLACE SECOND NUMBER INTO THE BEGINNING OF ARRAY THAT WAY WHEN WE 'pop()' IT WILL
            //GRAB OUR FIRST NUMBER ENTERED.

            numbers.unshift(current);
            display = "0";

            //TAKING OUT TWO NUMBERS TO PERFORM OUR OPERATIONS ON IT    
            let first = numbers.pop();
            let second = numbers.pop();

            //NUMBERS ARRAY IS CURRENTLY AT LENGTH "0"
            operate(operator, first, second);
        } 
    });

    subtract.addEventListener("click",()=>{
        let current = Number(display);
        //WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE CURRENT NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
        numbers.push(current);
        display = "0"; 
        operator = "-";
    });

    divide.addEventListener("click",()=>{
        let current = Number(display);
        //WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE CURRENT NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
        numbers.push(current); 
        display = "0";
        operator = "/";
    });

    equal.addEventListener("click",()=>{

        let current = Number(display);

        //USING 'unshift()' TO PLACE SECOND NUMBER INTO THE BEGINNING OF ARRAY THAT WAY WHEN WE 'pop()' IT WILL
        //GRAB OUR FIRST NUMBER ENTERED.

        numbers.unshift(current);

        //TAKING OUT TWO NUMBERS TO PERFORM OUR OPERATIONS ON IT 
        let first = numbers.pop();
        let second = numbers.pop();

        //NUMBERS ARRAY IS CURRENTLY AT LENGTH "0"
        operate(operator,first,second);

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

function operate(operator,first,second){
    if(operator === "+"){
        ans = sum(first,second);
    }
    if(operator === "*"){
        ans = product(first,second);
    }

    //WE ARE GOING TO PUSH OUR ANS BACK INTO NUMBERS ARRAY
    numbers.unshift(ans);
   
    //RESET OUR DISPLAY TO ZERO TO PREVENT USING THE NUMBER TWICE WHEN PERFORMING OPERATION
    display = "0";
    
    
    console.log(ans);    
}


returnNumbersOperators();






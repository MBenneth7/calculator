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
const p = [];

//VARIABLES TO DISPLAY CURRENT NUMBER ON SCREEN AND CONTAIN OUR CURRENT ANSWER
let digitInput = "0";
let ans = 0;

let decimalIndex = 0;
let newPlace = 0;

//HAVE A VARIABLE KEEP TRACK OF AN OPERATOR
let operator = "";

function returnNumbersOperators(){

    zero.addEventListener("click",()=>{
        if(digitInput === "0")
            digitInput = "0";
        else{        
            digitInput += "0";
        }    
        console.log(digitInput);
    });

    one.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "1";
        else{
            digitInput += "1";
        }     
        console.log(digitInput);
    });

    two.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "2";
        else{
            digitInput += "2";
        }     
        console.log(digitInput);
    });

    three.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "3";
        else{
            digitInput += "3";
        }     
        console.log(digitInput);
    });

    four.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "4";
        else{
            digitInput += "4";
        }     
        console.log(digitInput);
    });

    five.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "5";
        else{
            digitInput += "5";
        }     
        console.log(digitInput);
    });

    six.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "6";
        else{
            digitInput += "6";
        }     
        console.log(digitInput);
    });

    seven.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "7";
        else{
            digitInput += "7";
        }     
        console.log(digitInput);
    });

    eight.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "8";
        else{
            digitInput += "8";
        }     
        console.log(digitInput);
    });

    nine.addEventListener("click",()=>{
        //IF OUR FIRST DIGIT IN 'display' IS CURRENTLY ZERO WE REPLACE IT WITH THE FIRST NUMBER CHOSEN
        //ELSE CONCAT THE DIGIT TO THE 'display' STRING
        if(digitInput === "0")
            digitInput = "9";
        else{
            digitInput += "9";
        }     
        console.log(digitInput);
    });

    add.addEventListener("click",()=>{

        //IF STATEMENT TO CHECK ANY UNECESSARY "." AT THE END OF NUMBER (decimcal points) IN STRING BEFORE CONVERTING INTO A NUMBER TYPE (CURRENTLY "digitInput")
        let decimalIndex = digitInput.indexOf(".");
        if(decimalIndex > -1)
            digitInput.replace(decimalIndex,"");

        //TURNS OUR 'digitInput' FROM A STRING TYPE INTO A NUMBER TYPE
        let current = Number(digitInput);


        //IF STATEMENT RUNS WHEN WE CLICK ON A DIFFERENT OPERATOR AND WE WANT TO FINISH PREVIOUS OPERATION. 
        
        if(current !== 0 && operator !== "+" && numbers.length >= 1){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS, WE ALSO DON'T WANT TO RUN IT WHEN OUR 'numbers' ARRAY DOESN'T HAVE ANY NUMBERS IN IT YET EITHER.
            
            let previous = numbers.pop();
            operate(operator,previous,current);
            operator = "+";

            //'return' USED TO BREAK OUT OF LISTENER FUNCTION TO PREVENT RUNNING NEXT SET OF 'IF' STATEMENTS
            return;
        }

        //ASSIGN OUR 'operator' VARIABLE A OPERATION TO PERFORM WHEN WE CALL OUR 'operate' FUNCTION   
        operator = "+";

        if(numbers.length < 1){
            //ON THE FIRST START 'numbers' ARRAY LENGTH IS "0", WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE FIRST NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
            numbers.push(current);
            //RESET 'digitInput' TO '0' TO RECEIVE NEXT DIGIT
            digitInput = "0";
        }
        else if(current !== 0 && operator === "+"){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS.

            //WE ARE GOING TO RETREIVE OUR PREVIOUS NUMBER AND STORE IT INTO 'previous' AND PASS IT INTO OUR 'operate' FUNCTION ALONG WITH 'current' AND OUR 'operator' VARIABLES. 
            let previous = numbers.pop();
            operate(operator,previous,current);
        }
    });

    multiply.addEventListener("click",()=>{

        //TURNS OUR 'digitInput' FROM A STRING TYPE INTO A NUMBER TYPE
        let current = Number(digitInput);

        //IF STATEMENT RUNS WHEN WE CLICK ON A DIFFERENT OPERATOR AND WE WANT TO FINISH PREVIOUS OPERATION. 
        
        if(current !== 0 && operator !== "*" && numbers.length >= 1){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS, WE ALSO DON'T WANT TO RUN IT WHEN OUR 'numbers' ARRAY DOESN'T HAVE ANY NUMBERS IN IT YET EITHER.
            
            let previous = numbers.pop();
            operate(operator,previous,current);
            operator = "*";

            //'return' USED TO BREAK OUT OF LISTENER FUNCTION TO PREVENT RUNNING NEXT SET OF 'IF' STATEMENTS
            return;
        }

        //ASSIGN OUR 'operator' VARIABLE A OPERATION TO PERFORM WHEN WE CALL OUR 'operate' FUNCTION   
        operator = "*";

        if(numbers.length < 1){
            //ON THE FIRST START 'numbers' ARRAY LENGTH IS "0", WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE FIRST NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
            numbers.push(current);
            //RESET 'digitInput' TO '0' TO RECEIVE NEXT DIGIT
            digitInput = "0";
        }
        else if(current !== 0 && operator === "*"){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS.

            //WE ARE GOING TO RETREIVE OUR PREVIOUS NUMBER AND STORE IT INTO 'previous' AND PASS IT INTO OUR 'operate' FUNCTION ALONG WITH 'current' AND OUR 'operator' VARIABLES. 
            let previous = numbers.pop();
            operate(operator,previous,current);
        }
    });

    subtract.addEventListener("click",()=>{

        //TURNS OUR 'digitInput' FROM A STRING TYPE INTO A NUMBER TYPE
        let current = Number(digitInput);

        //IF STATEMENT RUNS WHEN WE CLICK ON A DIFFERENT OPERATOR AND WE WANT TO FINISH PREVIOUS OPERATION. 
        
        if(current !== 0 && operator !== "-" && numbers.length >= 1){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS, WE ALSO DON'T WANT TO RUN IT WHEN OUR 'numbers' ARRAY DOESN'T HAVE ANY NUMBERS IN IT YET EITHER.
            
            let previous = numbers.pop();
            operate(operator,previous,current);
            operator = "-";

            //'return' USED TO BREAK OUT OF LISTENER FUNCTION TO PREVENT RUNNING NEXT SET OF 'IF' STATEMENTS
            return;
        }

        //ASSIGN OUR 'operator' VARIABLE A OPERATION TO PERFORM WHEN WE CALL OUR 'operate' FUNCTION   
        operator = "-";

        if(numbers.length < 1){
            //ON THE FIRST START 'numbers' ARRAY LENGTH IS "0", WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE FIRST NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
            numbers.push(current);
            //RESET 'digitInput' TO '0' TO RECEIVE NEXT DIGIT
            digitInput = "0";
        }
        else if(current !== 0 && operator === "-"){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS.

            //WE ARE GOING TO RETREIVE OUR PREVIOUS NUMBER AND STORE IT INTO 'previous' AND PASS IT INTO OUR 'operate' FUNCTION ALONG WITH 'current' AND OUR 'operator' VARIABLES. 
            let previous = numbers.pop();
            operate(operator,previous,current);
        }
        
    });

    divide.addEventListener("click",()=>{

        //TURNS OUR 'digitInput' FROM A STRING TYPE INTO A NUMBER TYPE
        let current = Number(digitInput);

        //IF STATEMENT RUNS WHEN WE CLICK ON A DIFFERENT OPERATOR AND WE WANT TO FINISH PREVIOUS OPERATION. 
        
        if(current !== 0 && operator !== "/" && numbers.length >= 1){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS, WE ALSO DON'T WANT TO RUN IT WHEN OUR 'numbers' ARRAY DOESN'T HAVE ANY NUMBERS IN IT YET EITHER.
            
            let previous = numbers.pop();
            operate(operator,previous,current);
            operator = "/";

            //'return' USED TO BREAK OUT OF LISTENER FUNCTION TO PREVENT RUNNING NEXT SET OF 'IF' STATEMENTS
            return;
        }

        //ASSIGN OUR 'operator' VARIABLE A OPERATION TO PERFORM WHEN WE CALL OUR 'operate' FUNCTION   
        operator = "/";

        if(numbers.length < 1){
            //ON THE FIRST START 'numbers' ARRAY LENGTH IS "0", WHEN WE CLICK ON AN OPERATOR WE WILL PUSH THE FIRST NUMBER ENTERED TO AN ARRAY TO KEEP TRACK OF IT.
            numbers.push(current);
            //RESET 'digitInput' TO '0' TO RECEIVE NEXT DIGIT
            digitInput = "0";
        }
        else if(current !== 0 && operator === "/"){
            //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT IT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
            //WHICH MAY YIELD WRONG RESULTS.

            //WE ARE GOING TO RETREIVE OUR PREVIOUS NUMBER AND STORE IT INTO 'previous' AND PASS IT INTO OUR 'operate' FUNCTION ALONG WITH 'current' AND OUR 'operator' VARIABLES. 
            let previous = numbers.pop();
            operate(operator,previous,current);
        }
        
    });

    percent.addEventListener("click",()=>{
        
        //MAKE THE PERCENT FUNCTION INDEPENDENT OF OTHER FUNCTIONS
        let perAns = 0;
        //IF NUMBERS ARRAY IS EMPTY FIND PERCENTAGE OF CURRENT "digitInput"  
        if(numbers.length === 0){
            //TAKE INPUT AND TURN INTO STRING
            let current = Number(digitInput);
            perAns = percentage(current);
            p.push(perAns);
        }
        else{
            let previous = p.pop();
            perAns = percentage(previous)
            p.push(perAns);
        }    
        digitInput = String(perAns);
        console.log(Number(digitInput));
    });

    reset.addEventListener("click",()=>{
        digitInput = "0";
        numbers.length = 0;
        operator = "";
        ans = 0;
        p.length = 0;
        console.log(digitInput);
    });

    equal.addEventListener("click",()=>{

        //CHECKS IF USER DOES NOT INPUT A DIGIT AFTER PRESSING "decimal",
        //WILL RETURN "0"

        let lastIndex = digitInput[digitInput.length-1]; 

        if(lastIndex === ".")
            digitInput = digitInput.replace(lastIndex,"");

        let current = Number(digitInput);

        if(current!==0){
        //RUNS WHEN OUR 'current' VARIABLE ISN'T '0'. WE DON'T WANT TO OPERATE IF IT EQUALS '0', BECAUSE IT MAY INADVERTENTLY RUN 'operate' FUNCTION TWICE
        //WHICH MAY YIELD WRONG RESULTS.  
        
        //WE ARE GOING TO RETREIVE OUR PREVIOUS NUMBER AND STORE IT INTO 'previous' AND PASS IT INTO OUR 'operate' FUNCTION ALONG WITH 'current' AND OUR 'operator' VARIABLES. 
            let previous = numbers.pop();
            operate(operator,previous,current);
        }
        else{
            //WE JUST WANT TO DISPLAY OUR ANSWER IF THE EQUAL BUTTON IS PRESSED AGAIN AND OUR 
            //'current' VARIABLE IS STILL '0' WHICH MEANS WE ARE WAITING FOR A SECOND INPUT.
            console.log(ans);
        }    
    });

    decimal.addEventListener("click", ()=>{

        let decimalIndex = digitInput.indexOf(".");

        //IF WE HAVE A DECIMAL POINT IN OUR NUMBER ALREADY, PREVENT USER FROM INPUTTING ANOTHER ONE, BREAK OUT OF EVENT
        if(decimalIndex !== -1)
            return;
        else if(decimalIndex > 1)
            digitInput = "0";
        else
            digitInput += ".";
        
        console.log(digitInput);
    });

    negPos.addEventListener("click", ()=>{

        let negativeIndex = digitInput.indexOf("-");

        //IF WE HAVE A NEGATIVE ALREADY AND WE PRESS IT AGAIN REMOVE THE NEGATIVE, INDICATING IT IS POSITIVE. ELSE ADD NEGATIVE TO THE BEGINNING OF "digitInput" STRING
        if(negativeIndex !== -1)
            digitInput = digitInput.replace(digitInput[negativeIndex],"");
        else{
            digitInput = digitInput.replace(/^/,"-");
        }      
        
        console.log(digitInput);    
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

function percentage(a){
    return a/100;
}

function operate(operator,first,second){
    if(operator === "+"){
        ans = sum(first,second);
    }
    else if(operator === "*"){
        ans = product(first,second);
    }
    else if(operator === "-"){
        ans = difference(first,second);
    }
    else if(operator === "/"){
        ans = quotient(first,second);        
    }

    //WE ARE GOING TO PUSH OUR ANS BACK INTO NUMBERS ARRAY
    numbers.push(ans);
   
    //RESET OUR "digitInput" TO ZERO TO PREVENT USING THE NUMBER TWICE WHEN PERFORMING OPERATION
    digitInput = "0";
    
    console.log(ans);
}




returnNumbersOperators();






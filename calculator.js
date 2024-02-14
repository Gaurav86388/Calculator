
let digit = ""
let prev_num = 0
let last_op = ""
let display = document.querySelector("#input");
let flag = 0;
let float_used = 0

function getNumber(num){

    if(flag === 1){
        digit = "";
        flag = 0;
    }

        digit += num;
        display.value = digit;

}

function getOperation(opName){

     
    
    if(opName ==="c"){
        display.value = 0;
        prev_num = 0;
        digit = "";
        last_op = "";
        float_used = 0;
        flag = 0;
    }
    else if(opName === "x"){
        
        digit = digit.slice(0, -1)
        display.value = digit;
    }
    else if(opName === "."){

        if(!digit.includes(".")){
            digit = digit + "."
            display.value = digit;
            float_used = 1;
        }
        
    }
    else{
        flag = 1;
        if(float_used === 0){
                digit = parseInt(digit)
        }
        else{
                digit = parseFloat(digit)
        }


        if(prev_num !=0 ){

            prev_num = calculate(prev_num, last_op, digit)
            display.value = prev_num
        
        }

        else if(prev_num ==0 && last_op != ""){
            prev_num = calculate(prev_num, last_op, digit)
            display.value = prev_num

        }
        else{
            prev_num = digit
        }
        last_op = opName;
    }

    

        
}

function calculate(prev_num, last_op, digit){

    let res_add = 0

    switch(last_op){

        case "+": 
                    res_add = prev_num + digit; break;

        case "-":       
                    res_add = prev_num - digit; break;
        case "*":
                    res_add = prev_num * digit; break;
        case "/":               
                    if (digit===0 && prev_num !=0){
                        res_add = "Infinity";
                    }
                    else if(digit===0 && prev_num ==0){
                        res_add = 0;
                    }

                    else{
                        res_add = prev_num / digit;
                    }
                    break;
        case "%": 
                    res_add = prev_num % digit;
                    break;
        case "=":
                    res_add = prev_num;
                    break;
    }
   
    
    return res_add;

}








function calc(){
    var operation, result, num1, num2;
    operation = parseInt(prompt("What operation would you use? Type the number ONLY. \n (1) Addition (2) Subtraction (3) Multiplication (4) Division"));
    num1  = parseInt(prompt("Enter first number"));
    num2 = parseInt(prompt("Enter second number"));
    switch(operation){
        case 1:
            result = num1 + num2;
            break;
    }

    console.log(`${result}`);

}


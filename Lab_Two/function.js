function calc() {
	var operation, result;
	operation = prompt(
		'What operation would you use? Type the number ONLY. \n (1) Addition (2) Subtraction (3) Multiplication (4) Division'
	);

	if (operation != null) {
		switch (operation) {
			case '1':
				num1 = parseInt(prompt('Enter first number'));
				num2 = parseInt(prompt('Enter second number'));
				result = num1 + num2;
				document.getElementById(
					'show'
				).innerHTML = `${num1} plus ${num2} is ${result}`;
				break;
			case '2':
				num1 = parseInt(prompt('Enter first number'));
				num2 = parseInt(prompt('Enter second number'));
				result = num1 - num2;
				document.getElementById(
					'show'
				).innerHTML = `${num1} minus ${num2} is ${result}`;
				break;
			case '3':
				num1 = parseInt(prompt('Enter first number'));
				num2 = parseInt(prompt('Enter second number'));
				result = num1 * num2;
				document.getElementById(
					'show'
				).innerHTML = `${num1} times ${num2} is ${result}`;
				break;
			case '4':
				num1 = parseInt(prompt('Enter first number'));
				num2 = parseInt(prompt('Enter second number'));
				result = num1 / num2;
				var remainder = num1 % num2;
				document.getElementById(
					'show'
				).innerHTML = `${num1} divided by ${num2} is ${Math.floor(
					result
				)} remainder ${remainder}`;
				break;
			default:
				document.getElementById('show').innerHTML = `Invalid Operation`;
		}
	} else {
		document.getElementById('show').innerHTML = `You pressed Cancel`;
	}
}

const add = function(a,b) {
	return +a + +b;
};

const subtract = function(a,b) {
	return a - b;
};

const divide = function(a,b) {
	return a/b;
};

const multiply = function(a,b) {
  return a*b;
};

let firstCalcValue, secondCalcValue, operator;

firstCalcValue = prompt();
operator = prompt();
secondCalcValue = prompt();


const operate = function(firstNum,secondNum,operate) {
    let operation;
	switch (operate) {
		case "+":
			operation = add(firstNum,secondNum);
		break;

		case "-":
			operation = subtract(firstNum,secondNum);
		break;

		case "/":
			operation = divide(firstNum,secondNum);
		break;

		case "*":
			operation = multiply(firstNum,secondNum);
		break;
	}
	return operation;
}

console.log(operate(firstCalcValue,secondCalcValue,operator));
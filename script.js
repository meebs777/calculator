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

let displayValue, firstCalcValue = 0 , secondCalcValue = 0, operator;
let operatorPressed, operatorCheck;

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

		case "x":
			operation = multiply(firstNum,secondNum);
		break;
	}
	return operation;
}

const fillDisplay = function() {
	
	const digits = document.querySelectorAll(".digits");
	const display = document.querySelector(".display");
	digits.forEach((digit) => {
		digit.addEventListener("click", () => {
			//Know whether to clear text content before displaying new numbers
			if (operatorPressed) {
				operatorPressed = false;
				display.textContent = "";
			}

			if(display.textContent === "0") {
				display.textContent = digit.textContent;
			} else {
				display.textContent += digit.textContent;
			}
			displayValue = parseInt(display.textContent);
			secondCalcValue = displayValue;

			//Logic to get numbers for operations
			// if(firstCalcValue === 0) {
			// 	firstCalcValue = displayValue;
			// } else {
			// 	secondCalcValue = displayValue;
			// }
		})
	})
}

const clearDisplay = function () {
	const display = document.querySelector(".display");
	const clear = document.querySelector(".utility");
	clear.addEventListener("click", () => {
		display.textContent = "0";
		displayValue = parseInt(display.textContent);
		firstCalcValue = 0;
		secondCalcValue = 0;
	})
	
}

 const getOperator = function () {
 	const operation = document.querySelectorAll(".operators");
	const display = document.querySelector(".display");
	operation.forEach((operators) => {
		operators.addEventListener("click", () => {
			operator = operators.textContent;
			operatorPressed = true;
			if(operator !== operatorCheck && firstCalcValue !==0) {
				display.textContent = operate(firstCalcValue,secondCalcValue,operatorCheck);
				firstCalcValue = parseInt(display.textContent);
			}
			if (firstCalcValue !== 0 && operator === operatorCheck) {
				display.textContent = operate(firstCalcValue,secondCalcValue,operator);
			}
			firstCalcValue = parseInt(display.textContent);
			operatorCheck = operator;
			
		})
	})
 }

 const equalPressed = function () {
	const equals = document.querySelector(".equals");
	const display = document.querySelector(".display");
	equals.addEventListener("click", () => {
		console.log(firstCalcValue);
		console.log(secondCalcValue);
		console.log(operator);
		display.textContent = operate(firstCalcValue,secondCalcValue,operator);
	})
 }


getOperator();
fillDisplay();
clearDisplay();
equalPressed();
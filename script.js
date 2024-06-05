const add = function(a,b) {
	return +a + +b;
};

const subtract = function(a,b) {
	return a - b;
};

const divide = function(a,b) {
	if (a === 0 && b === 0 ){
		return "LOL";
	}
	return a/b;
};

const multiply = function(a,b) {
  return a*b;
};

const percentage = function () {
	display.textContent = display.textContent/100;
}

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
			displayValue = parseFloat(display.textContent);
			secondCalcValue = displayValue;
		})
	})
}

const clearDisplay = function () {
	const display = document.querySelector(".display");
	const clear = document.querySelector(".utility");
	clear.addEventListener("click", () => {
		display.textContent = "0";
		displayValue = parseFloat(display.textContent);
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
				firstCalcValue = parseFloat(display.textContent);
			}
			if (firstCalcValue !== 0 && operator === operatorCheck) {
				display.textContent = operate(firstCalcValue,secondCalcValue,operator);
			}
			firstCalcValue = parseFloat(display.textContent);
			operatorCheck = operator;
			
		})
	})
 }

 const equalPressed = function () {
	const equals = document.querySelector(".equals");
	const display = document.querySelector(".display");
	equals.addEventListener("click", () => {
		display.textContent = operate(firstCalcValue,secondCalcValue,operator);
	})
 }

 const percentagePressed = function () {
	const percentage = document.querySelector(".percentage");
	const display = document.querySelector(".display");
	percentage.addEventListener("click", () => {
		display.textContent = display.textContent/100;
	})
 }

 const plusMinus = function() {
	const plusMinus = document.querySelector(".plusMinus");
	const display = document.querySelector(".display");
	plusMinus.addEventListener("click", () => {
		display.textContent = display.textContent*-1;
	})
 }

 const addDecimal = function () {
	const decimal = document.querySelector(".decimal");
	const display = document.querySelector(".display");
	decimal.addEventListener("click", () => {
		if (!display.textContent.includes(".")) {
			display.textContent += ".";
		}
	})
 }


getOperator();
fillDisplay();
clearDisplay();
equalPressed();
percentagePressed();
plusMinus();
addDecimal();
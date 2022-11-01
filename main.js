let operator = '';
let previousValue  = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded', function(){
	// Store all components in JS
	let clear = document.querySelector('.clear');
	let equal = document.querySelector('.equal');
	let decimal = document.querySelector('.decimal');

	let numbers = document.querySelectorAll('.number');
	let operators= document.querySelectorAll('.operator');

	let previousScreen = document.querySelector('.previous');
	let currentScreen = document.querySelector('.current');

	// gotta work more about this part
	numbers.forEach((number) => number.addEventListener('click', function(e){
		handleNumber(e.target.textContent);
		currentScreen.textContent = currentValue;
	}))
	// e.target 
	operators.forEach((op) => op.addEventListener('click', function(e){
		handleOperator(e.target.textContent);
		previousScreen.textContent = previousValue + ' ' + operator;
		currentScreen.textContent = currentValue;
	}))

	clear.addEventListener('click', function(){
		previousValue = '';
		currentValue = '';
		operator = '';
		previousScreen.textContent = currentValue;
		currentScreen.textContent = currentValue;
	})

	equal.addEventListener('click',function(){
		calculate();
		previousScreen.textContent = '';
		currentScreen.textContent  = previousValue;
	})

})

function handleNumber(num){
	currentValue += num;
}

function handleOperator(op){
	operator = op;
	previousValue = currentValue;
	currentValue = '';
}

function calculate(){
	previousValue = Number(previousValue);
	currentValue = Number(currentValue);

	if(operator === '+'){
		previousValue += currentValue;
	}else if(operator === '-'){
		previousValue -= currentValue;
	}else if(operator === '*'){
		previousValue *= currentValue;
	}else{
		previousValue /= currentValue;
	}
	previousValue = roundNumber(previousValue);
	previousValue = previousValue.toString();
	currentValue = previousValue.toString();
}

function roundNumber(num){
	return Math.round(num *1000)/ 1000;
}
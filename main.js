const invertSign = document.querySelector('.invertSign');
const enter = document.querySelector('.enter');
const allClear = document.querySelector('.allClear');
const clear = document.querySelector('.clear');
const display = document.querySelector('#outputWindow');
const numbersAndOps = document.querySelectorAll('.math');
let disMath = '';

for (let digit of numbersAndOps) {
	digit.addEventListener('click', function(event) {
		display.innerText += digit.innerText;
		disMath += digit.innerText;
	});
}

allClear.addEventListener('click', function(event) {
	display.innerText = '';
	disMath = '';
});

// NOT WORKING
clear.addEventListener('click', function(event) {
	display = display.substr(0, display.length - 1);
	disMath = disMath.slice(0, -1);
});

enter.addEventListener('click', function(event) {
	let answer = eval(disMath);
	display.textContent = answer;
});

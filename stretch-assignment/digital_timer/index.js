let canCount = false;
let msTensCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;
let counter;

function startCounter() {
	resetCounter();
	canCount = true;
	start.setAttribute('disabled', 'disabled');
	counter = setInterval(function() {
		if(canCount) {
			calculateTime();
			updateUI();
		} else {
			clearInterval(counter);
			start.removeAttribute('disabled');
		}
	}, 1);
}
function updateUI() {
	msTens.textContent = msTensCounter;
	msHundreds.textContent = msHundredsCounter;
	secondOnes.textContent = secondOnesCounter;
	secondTens.textContent = secondTensCounter;
}
function resetCounter() {
	canCount = false;
	start.removeAttribute('disabled');
	document.querySelectorAll('.digit').forEach(digit => digit.style = '');
	msTensCounter = msHundredsCounter = secondOnesCounter = secondTensCounter = 0;
	updateUI();
	clearInterval(counter);
}
function calculateTime() {
	msTensCounter++;
	if (msTensCounter === 10) {
		msTensCounter = 0;
		msHundredsCounter++;
	}
	if (msHundredsCounter === 10) {
		msHundredsCounter = 0;
		secondOnesCounter++;
	}
	if (secondOnesCounter === 10) {
		secondOnesCounter = 0;
		secondTensCounter++;
	}
	if (secondTensCounter === 1) {
		document.querySelectorAll('.digit').forEach(digit => digit.style.color = 'red');
		canCount = false;
	}
}
start.addEventListener('click', startCounter);
reset.addEventListener('click', resetCounter);
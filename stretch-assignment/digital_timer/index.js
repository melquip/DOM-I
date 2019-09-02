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
	}, 10);
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
	document.querySelector('.digits').classList.remove('complete');
	document.querySelectorAll('.digit').forEach(digit => digit.classList.remove('redDigit'));
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
		document.querySelector('.digits').classList.add('complete');
		document.querySelectorAll('.digit').forEach(digit => digit.classList.add('redDigit'));
		canCount = false;
	}
}
start.addEventListener('click', startCounter);
reset.addEventListener('click', resetCounter);
'use strict';

/*
console.log(document.querySelector('.message'));

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let score = 20;

const secretNumber = Math.floor(Math.random() * 20) + 1;


document.querySelector('.check').addEventListener('click', function() {
	const guess = parseInt(document.querySelector('.guess').value);

	// console.log(guess, typeof guess);

	if (!guess) {
		document.querySelector('.message').textContent = 'No number!';
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = 'Correct Number!';
		document.querySelector('.number').textContent = secretNumber;

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
	} else if ( guess > secretNumber) {
		if (score > 0) {document.querySelector('.message').textContent = 'Too High';
		score--;
		document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You Lose The Game. Try Again';
			document.querySelector('check').disabled = true;
		}
		
	} else if ( guess < secretNumber) {
		if (score > 0) {document.querySelector('.message').textContent = 'Too Low';
		score--;
		document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = 'You Lose The Game. Try Again';
			document.querySelector('check').addEventListener('click', disabled);
		}
		
	}
});


document.querySelector('.again').addEventListener('click', function() {
	let score = 20;

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.message').textContent = 'start guessing......';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';

});
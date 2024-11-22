const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById('guessSubmit').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessField').value);
    let message = '';
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message = 'Please enter a valid number between 1 and 10.';
    } else if (guess === randomNumber) {
        message = `Congratulations You guessed the number ${randomNumber}.`;
        document.getElementById('guessField').disabled = true;
        this.disabled = true;
    }
    else if (guess < randomNumber) {
        message = 'Too low! Guess again.';
    } else {
        message = 'Too high! Guess again.';
    }
    document.getElementById('message').textContent = message;
    document.getElementById('guessField').value = '';
    document.getElementById('guessField').focus();
});
console.log(randomNumber)
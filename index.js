const words = [
    'javascript',
    'monkey',
    'amazing',
    'pancake',
    'dog',
    'game',
    'computer'
];

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let state = {};

state.word = words[Math.floor(Math.random()*words.length)];
state.wordLength = state.word.length;
state.remainingLetters = state.wordLength;
state.remainingGuesses = 10;
state.answerArray = [];
state.guessedLetters = [];

for (let i = 0; i < state.wordLength; i++) {
    state.answerArray.push(' _ ');
}

while (state.remainingLetters > 0 && state.remainingGuesses > 0) {
    alert(`Current word: ${state.answerArray.join(" ")}. \r\n\Remaining guesses: ${state.remainingGuesses}.`);
    let guess = prompt('Guess a letter, or click cancel to stop playing.') 
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert('Please enter a single letter.')
    } else if (letters.indexOf(guess) === -1) {
        alert('Please enter a valid letter.')
    } else if (state.guessedLetters.indexOf(guess) !== -1) {
        alert('You have already guessed that letter.');
    } else {
        guess = guess.toLowerCase();
        state.guessedLetters.push(guess);
        for (let i = 0; i < state.wordLength; i++) {
            if (guess === state.word[i]) {
                state.answerArray[i] = guess;
                state.remainingLetters--;
            }
        }
        state.remainingGuesses--;
        console.log(state.remainingGuesses);        
    }
}
if (state.remainingLetters === 0) {
    alert(`You won! The word is ${state.word}.`);
} else if (state.remainingGuesses === 0) {
    alert(`You lost. The word was ${state.word}.`);
}
let guess = document.querySelector('#guess');
let guessBtn = document.querySelector('#guessBtn');
let guessInput = document.querySelector('#guessInput');
let hint = document.querySelector('#hint');
let after = document.querySelector('#after');

let random = Math.floor(Math.random() * 100) + 1;
let guessChance = 0;

guessBtn.addEventListener('click', ()=>{
  if (guessInput.value === "") return;

let userInput = Number(guessInput.value);

if (userInput < 1 || userInput > 100) {
    hint.textContent = "Enter a number between 1 and 100";
    guessInput.value = "";
    return;
}

guessChance++;
guess.textContent = guessChance;

if (userInput > random) {
    hint.textContent = "You are too high";
} else if (userInput < random) {
    hint.textContent = "You are too low";
} else {
    hint.textContent = "🎉 You Win!";
    guessBtn.disabled = true;
    after.textContent = `You win in ${guessChance} guesses.`;
}

guessInput.value = "";
  
});

document.getElementById('start-button').addEventListener('click', function() {
  // Generate a random number between 1 and 10
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  // Get the message box element
  const messageBox = document.getElementById('message');
  // Set a flag to check if the player guessed correctly
  let guessedCorrectly = false;
  // Use a for loop to give the player 5 attempts
  for (let attempts = 1; attempts <= 5; attempts = attempts + 1) {
    // Ask the user for a guess
    let input = prompt('Attempt ' + attempts + ': Enter a number between 1 and 10:');
    // Convert the input to a number
    let guess = Number(input);
    // Check if the guess is correct
    if (guess === secretNumber) {
      // Show a success message with the number of attempts
      messageBox.textContent = `🎉 Congratulations! You guessed it in ${attempts} attempts.`;
      guessedCorrectly = true;
      // Exit the loop if guessed correctly
      break;
    } else if (guess > secretNumber) {
      // Give a hint if the guess is too high
      messageBox.textContent = 'Too high! Try again.';
    } else if (guess < secretNumber) {
      // Give a hint if the guess is too low
      messageBox.textContent = 'Too low! Try again.';
    }
  }
  // If the player did not guess correctly after 5 attempts
  if (!guessedCorrectly) {
    messageBox.textContent = `❌ Game over! The number was ${secretNumber}.`;
  }
});
// Function for the very first click (Starts the music)
function startJourney(currentId, nextId) {
  let music = document.getElementById("bgMusic");
  music.volume = 0.5; // Keeps it at a nice background volume
  
  // Browsers require interaction before playing audio, so this catches any errors
  music.play().catch(error => {
    console.log("Audio play failed, user may need to interact with the page more.");
  });

  // Move to the next screen
  nextScreen(currentId, nextId);
}

// Function to transition between all other screens
function nextScreen(currentId, nextId) {
  let currentScreen = document.getElementById("screen-" + currentId);
  let nextScreenElement = document.getElementById("screen-" + nextId);

  // 1. Fade out the current screen
  currentScreen.classList.remove("active");
  currentScreen.classList.add("hidden");

  // 2. Reset the button delay on the next screen so it waits 3 seconds again
  let nextButton = nextScreenElement.querySelector('.spawn-btn');
  if (nextButton) {
    nextButton.style.animation = 'none';
    nextButton.offsetHeight; /* This forces the browser to refresh the element */
    nextButton.style.animation = null; 
  }

  // 3. Fade in the next screen after a slight delay for a smooth transition
  setTimeout(() => {
    nextScreenElement.classList.remove("hidden");
    nextScreenElement.classList.add("active");
  }, 800); // 800ms feels like stepping forward into the next biome
}

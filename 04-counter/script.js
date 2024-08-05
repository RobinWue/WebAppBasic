// script.js

let counter = 0;
const maxCount = 100;

const counterElement = document.getElementById("counter");
const mainArea = document.getElementById("main-area");
const resetButton = document.getElementById("reset-button");

function updateCounter() {
  counter++;
  counterElement.innerText = counter;

  // Calculate the background color change
  const colorStep = Math.min(counter, maxCount) / maxCount;
  const red = Math.floor(255 * colorStep);
  const green = Math.floor(255 * colorStep);
  const blue = 255 - Math.floor(255 * colorStep);

  mainArea.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  // Reset the background color after 100 counts
  if (counter % maxCount === 0) {
    counter = 0;
    mainArea.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

function resetCounter() {
  counter = 0;
  counterElement.innerText = counter;
  mainArea.style.backgroundColor = "rgb(255, 255, 255)";
}

mainArea.addEventListener("click", updateCounter);
resetButton.addEventListener("click", resetCounter);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    updateCounter();
  }
});

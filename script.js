const links = document.querySelectorAll('.random-link');
const popupTrigger = document.getElementById('popup-trigger');
const popupBox = document.getElementById('popup-box');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Function to generate random positions
function getRandomPosition(max) {
  return Math.random() * max;
}

// Randomly position each link
links.forEach((link) => {
  const randomTop = getRandomPosition(80); // 80% of viewport height
  const randomLeft = getRandomPosition(90); // 90% of viewport width
  link.style.top = `${randomTop}vh`;
  link.style.left = `${randomLeft}vw`;
});

// Open popup on "Page 2" click
popupTrigger.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  popupBox.style.display = 'flex'; // Show the popup
});

// Redirect on "Yes" button click
yesButton.addEventListener('click', () => {
  window.location.href = 'page2.html'; // Redirect to Page 2
});

// Redirect on "No" button click
noButton.addEventListener('click', () => {
  window.location.href = 'https://en.wikipedia.org/wiki/No'; // Redirect to Wikipedia
});

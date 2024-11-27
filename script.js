const links = document.querySelectorAll('.random-link');
const popupTrigger = document.getElementById('popup-trigger');
const popupBox = document.getElementById('popup-box');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

function getRandomPosition(max) {
  return Math.random() * max;
}

// Check for overlapping
function isOverlapping(el1, el2) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function placeLinksRandomly() {
  links.forEach((link, index) => {
    let randomTop, randomLeft;
    let overlapping;
    do {
      randomTop = getRandomPosition(80); // 80% of viewport height
      randomLeft = getRandomPosition(90); // 90% of viewport width
      link.style.top = `${randomTop}vh`;
      link.style.left = `${randomLeft}vw`;
      overlapping = Array.from(links)
        .slice(0, index)
        .some((otherLink) => isOverlapping(link, otherLink));
    } while (overlapping);
  });
}

// Randomly position links
placeLinksRandomly();

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


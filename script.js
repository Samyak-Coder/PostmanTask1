const track = document.querySelector(".track");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 1; 
let stepWidth;

const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

firstClone.classList.add("clone");
lastClone.classList.add("clone");

track.appendChild(firstClone);
track.insertBefore(lastClone, cards[0]);

const allCards = document.querySelectorAll(".card");
let currentIndex = 1;

function updateStepWidth() {
  const card = document.querySelector(".card");
  if (card) {
    stepWidth = card.offsetWidth;
  }
}

// go to slide
function goToSlide(index, animate = true) {
  if (animate) {
    track.style.transition = "transform 0.5s ease-in-out";
  } else {
    track.style.transition = "none";
  }
  track.style.transform = `translateX(${-stepWidth * index}px)`;
}


nextBtn.addEventListener("click", () => {
  if (currentIndex >= allCards.length - 1) return;
  currentIndex++;
  goToSlide(currentIndex);
});


prevBtn.addEventListener("click", () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  goToSlide(currentIndex);
});


track.addEventListener("transitionend", () => {
  if (allCards[currentIndex].classList.contains("clone")) {
    track.style.transition = "none";
    if (currentIndex === allCards.length - 1) {
      currentIndex = 1; 
    } else if (currentIndex === 0) {
      currentIndex = allCards.length - 2; 
    }
    goToSlide(currentIndex, false);
  }
});


window.addEventListener("resize", () => {
  updateStepWidth();
  goToSlide(currentIndex, false);
});


updateStepWidth();
goToSlide(currentIndex, false);

console.log("Carousel init:", {
  visibleCards: cards.length,
  totalNodes: allCards.length,
  stepWidth,
});

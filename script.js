let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let carousel = document.querySelector(".carousel");
let container = document.querySelector(".container");
let item1 = document.querySelector("section:first-child");
let item2 = document.querySelector("section:nth-child(2)");
let item3 = document.querySelector("section:last-child");

let direction;

prev.addEventListener("click", () => {
  if (direction === undefined || direction === -1) {
    carousel.appendChild(carousel.firstElementChild);
  }
  direction = 1;
  container.style.justifyContent = "flex-end";
  carousel.style.transform = "translate(20%)";
});

next.addEventListener("click", () => {
  if (direction === 1) {
    carousel.prepend(carousel.lastElementChild);
  }
  direction = -1;
  container.style.justifyContent = "flex-start";
  carousel.style.transform = "translate(-20%)";
});

carousel.addEventListener("transitionend", () => {
  carousel.style.transition = "none";
  if (direction === -1) {
    carousel.appendChild(carousel.firstElementChild);
  } else if (direction === 1) {
    carousel.prepend(carousel.lastElementChild);
  }

  carousel.style.transform = "translate(0)";
  setTimeout(() => {
    carousel.style.transition = "0.5s";
  }, 30);
  05;
});

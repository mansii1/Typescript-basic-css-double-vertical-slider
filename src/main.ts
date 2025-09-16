import "./style.css";

const sliderContainer = document.querySelector(
  ".slider-container"
) as HTMLDivElement;

const slideRight = document.querySelector(".right-slide") as HTMLDivElement;
const slideLeft = document.querySelector(".left-slide") as HTMLDivElement;
const upButton = document.querySelector(".up-button") as HTMLDivElement;
const downButton = document.querySelector(".down-button") as HTMLDivElement;
const slidesLength = slideRight.querySelectorAll<HTMLElement>("div").length;

let activeIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction: string) => {
  const slideHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeIndex++;
    if (activeIndex > slidesLength - 1) {
      activeIndex = 0;
    }
  } else if (direction === "down") {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slidesLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
  slideLeft.style.transform = `translateY(${activeIndex * slideHeight}px)`;
};

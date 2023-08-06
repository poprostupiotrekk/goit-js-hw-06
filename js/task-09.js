function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changer = document.querySelector("button.change-color");
const span = document.querySelector("span.color");
const body = document.body;

const changeBackground = () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
};

changer.addEventListener("click", changeBackground);

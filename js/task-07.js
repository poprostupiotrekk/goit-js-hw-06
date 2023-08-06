const slider = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

slider.addEventListener("input", ChangeFontSize) 
  span.style.fontSize = `${slider.value}px`;

function ChangeFontSize (event) {
  span.style.fontSize = event.currentTarget.value + 'px';
};

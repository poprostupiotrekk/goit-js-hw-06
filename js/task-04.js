const buttonInc = document.querySelector('button[data-action="increment"]');
const buttonDec = document.querySelector('button[data-action="decrement"]');
const result = document.querySelector("#value");
let counterValue = 0;
buttonDec.addEventListener(`click`, () => {
  counterValue--;
  result.textContent = counterValue;
});
buttonInc.addEventListener(`click`, () => {
  counterValue++;
  result.textContent = counterValue;
});

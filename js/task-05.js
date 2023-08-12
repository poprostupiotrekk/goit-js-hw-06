const textInput = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
const DEFAULT = "Anonymous";

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value === "" ? DEFAULT : event.target.value;
});

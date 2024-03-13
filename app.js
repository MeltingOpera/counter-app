const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const valueEl = document.querySelector(".counter__value");
let count = 0;

const increaseHandler = () => {
  count++;
  valueEl.textContent = count;
  increaseButtonEl.blur();
};

const decreaseHandler = () => {
  count > 0 ? count-- : "";
  valueEl.textContent = count;
  decreaseButtonEl.blur();
};

const resetHandler = () => {
  resetButtonEl.blur();
  count = 0;
  valueEl.textContent = count;
};

increaseButtonEl.addEventListener("click", increaseHandler);
decreaseButtonEl.addEventListener("click", decreaseHandler);
resetButtonEl.addEventListener("click", resetHandler);
document.addEventListener("keyup", increaseHandler);

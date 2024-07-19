const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const plusBtn = document.getElementById("plus");
const number = document.getElementById("number");
let count = 0;

plusBtn.onclick = function () {
  count++;
  number.textContent = count;
};

minusBtn.onclick = function () {
  count--;
  number.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  number.textContent = count;
};

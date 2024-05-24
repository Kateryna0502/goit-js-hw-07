function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divFirstElem = document.querySelector('#controls');
const divBoxElem = document.querySelector('#boxes');
const inputElem = document.querySelector('input');
const btnCreateElem = controls.querySelector('[data-create]');
console.log(btnCreateElem);
const btnDestroyElem = controls.querySelector('[data-destroy]');
btnDestroyElem.classList.add('destroy');
inputElem.classList.add('input-amount');
divBoxElem.classList.add('divBoxElem');

btnCreateElem.addEventListener('click', () => {
  const amount = Number(inputElem.value);
  if (amount > 1 && amount < 100) {
    createBoxes(amount);
    inputElem.value = '';
  }
});
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  divBoxElem.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const divElem = document.createElement('div');
    divElem.style.width = `${30 + i * 10}px`;
    divElem.style.height = `${30 + i * 10}px`;
    divElem.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divBoxElem);
  }
  divBoxElem.appendChild(fragment);
  }

function destroyBoxes() {
  divBoxElem.innerHTML = '';
}
btnDestroyElem.addEventListener('click', destroyBoxes);


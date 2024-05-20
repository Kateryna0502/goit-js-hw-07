function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls =
  document.getElementById('controls');
const input =
  controls.querySelector('input');
const createBtn =
  controls.querySelector('button[data-create]');

const destroyBtn =
  controls.querySelector('button[data-destroy]');

const boxesContainer =
  document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && <= 100) {

    crateBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 amd 100.');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  const fragment =
    document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {

    const div =
      document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor =
      getRandomHexColor();
    div.style.margin = '5px';
    fragment.appendChild(div);
    size += 10;
  }
  boxesContainer.appendChild(fragment);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
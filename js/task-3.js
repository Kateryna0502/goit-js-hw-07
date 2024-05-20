const nameInput =
    document.querySelector('#name-input');

const nameOutput =
    document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const trimmedValue =
        nameInput.ariaValueMax.trim();
    
    if (trimmedValue) {
        nameOutput.textContent = trimmedValue;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
});
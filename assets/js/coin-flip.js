const imageHeads = document.querySelector('.game__image-heads');
const imageTails = document.querySelector('.game__image-tails');
const flipBtn = document.querySelector('.game__btn');
const resultDisplay = document.querySelector('.game__result');

function flipCoin() {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    displayResult(result);
    updateImages(result);
}

function displayResult(result) {
    resultDisplay.textContent = result;
}

function updateImages(result) {
    const isHeads = result === "Heads";

    imageHeads.classList.toggle('game__image--is-visible', isHeads);
    imageHeads.classList.toggle('game__image--is-hidden', !isHeads);

    imageTails.classList.toggle('game__image--is-visible', !isHeads);
    imageTails.classList.toggle('game__image--is-hidden', isHeads);
}

[imageHeads, imageTails, flipBtn].forEach(element => {
    element.addEventListener("click", flipCoin);
})
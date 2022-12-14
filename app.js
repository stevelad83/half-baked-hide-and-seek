// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');
const resetButton = document.getElementById('hard-reset');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');

// initialize state
const hidingPlaces = ['tree', 'shed', 'boulder'];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'shed');
});

treeButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'tree');
});

boulderButton.addEventListener('click', () => {
    const hidingSpot = Math.floor(Math.random() * 3);
    const answer = hidingPlaces[hidingSpot];
    handleGuess(answer, 'boulder');
});

function handleGuess(correctSpot, userGuess) {
    resetFaces();
    totalGuesses++;
    if (correctSpot === userGuess) {
        correctGuesses++;
    }
    if (correctSpot === 'shed') {
        shedContainer.classList.add('face');
    } else if (correctSpot === 'tree') {
        treeContainer.classList.add('face');
    } else {
        boulderContainer.classList.add('face');
    }
    displayResults();
}

// then grab the appropriate container element for the correct guess from the DOM
// then add the face class to that element so that the face shows up
// then if the user guess is correct, increment the correct guesses
// update the DOM to show this change to the user (including the losses, not tracked directly in state)

function resetFaces() {
    shedContainer.classList.remove('face');
    treeContainer.classList.remove('face');
    boulderContainer.classList.remove('face');
}

function displayResults() {
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;
    winsEl.textContent = correctGuesses;
}

resetButton.addEventListener('click', () => {
    totalGuesses = 0;
    correctGuesses = 0;
    displayResults();
    resetFaces();
});

// DOM SELECTORS
const container = document.querySelector('#board-container');

const colors = ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4'];
const squares = 500;

// EVENT LISTENERS

// FUNCTIONS

for(let i = 0; i < squares; i++) {
    const square = document.createElement('DIV');
    square.classList.add('square');

    container.appendChild(square);
}

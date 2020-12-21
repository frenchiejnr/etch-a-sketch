function createGrid(columns, rows) {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let square = document.createElement("div");
            square.classList.add('square');
            document.querySelector('.container').appendChild(square);
        }
    }
}

function hoverChange() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) =>  {
            e.target.classList.add('filled');
        })
    })
}

function clearGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('filled');
    })
}
let clearButton = document.createElement('button');

document.querySelector('.container').before(clearButton);
clearButton.textContent = 'Clear';
clearButton.addEventListener('click', () => {
    clearGrid();
}
);
createGrid(16,16);
hoverChange();
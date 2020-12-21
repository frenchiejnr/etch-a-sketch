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
            console.log(e);
            e.target.classList.add('filled');
        })
    })
}

createGrid(16,16);
hoverChange();
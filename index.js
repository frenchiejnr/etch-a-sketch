function createGrid(columns, rows) {
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let square = document.createElement("div");
            square.classList.add('square');
            document.querySelector('.container').appendChild(square);
        }
    }
}

createGrid(16,16);
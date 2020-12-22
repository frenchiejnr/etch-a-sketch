function createGrid(columns, rows) {
  let container = document.querySelector(".container");
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
  container.style.cssText = `grid-template-columns: repeat(${columns},1fr); grid-template-rows: repeat(${rows},1fr);`;
  hoverChange();
}

function hoverChange() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.classList.add("filled");
    });
  });
}

function clearGrid() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("filled");
  });
}
let clearButton = document.createElement("button");

document.querySelector(".container").before(clearButton);
clearButton.textContent = "Clear";
clearButton.addEventListener("click", () => {
  newGrid();
  clearGrid();
});

function newGrid() {
  let gridSize = prompt("How big would you like your square to be?");
  deleteGrid();
  createGrid(gridSize, gridSize);
}
createGrid(16, 16);

function deleteGrid() {
  const container = document.documentElement.querySelector(".container");
  container.textContent = '';
}

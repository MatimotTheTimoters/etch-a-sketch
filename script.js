// Variables
let 
    currentRow, rowCount,
    currentCell, cellCount;

// Query Selectors
let body = document.querySelector("body");
let gridContainer = document.querySelector(".grid-container");
let rowCountInput = document.querySelector("#row-count-input");
let clearGridBtn = document.querySelector("#clear-grid-btn");
let loadGridBtn = document.querySelector("#load-grid-btn");
let loadCellsBtn = document.querySelector("#load-cells-btn");

// Event Listeners
clearGridBtn.addEventListener("click", () => {
    gridContainer.remove();
    rowCountInput.value = '';
});

loadGridBtn.addEventListener("click", () => {
    let newGridContainer = document.createElement("div");
    newGridContainer.classList.add("grid-container", "black-border", "flex-col");
    body.appendChild(newGridContainer);

    gridContainer = newGridContainer;
});

loadCellsBtn.addEventListener("click", () => {
    cellCount = rowCount = Number(rowCountInput.value);

    for (let currentRow = 1; currentRow <= rowCount; currentRow++) {
        let newRow = document.createElement("div");
        newRow.classList.add("flex-row", "grid-row");
        gridContainer.appendChild(newRow);
        for (let currentCell = 1; currentCell <= cellCount; currentCell++) {
            let newCell = document.createElement("div");
            newCell.classList.add("grid-cell", "black-border");
            newCell.addEventListener("mouseenter", () => {
                if (newCell.style.backgroundColor === "") {
                    newCell.style.backgroundColor = getRandomColor();
                }
            });
            newRow.appendChild(newCell);
        }
    }
});

// Functions
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}
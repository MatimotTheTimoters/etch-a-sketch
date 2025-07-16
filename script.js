// Variables
let 
    currentRow, rowCount,
    currentCell, cellCount;

// Query Selectors
let rowCountInput = document.querySelector("#row-count-input");
let loadGridBtn = document.querySelector("#load-grid-btn");
let clearGridBtn = document.querySelector("#clear-grid-btn");

// Event Listeners
loadGridBtn.addEventListener("click", () => {
    let gridContainer = document.querySelector(".grid-container");
    cellCount = rowCount = Number(rowCountInput.value);
    
    for (let currentRow = 1; currentRow <= rowCount; currentRow++) {
        let newRow = document.createElement("div");
        newRow.classList.add("flex-row", "grid-row");
        gridContainer.appendChild(newRow);
        for (let currentCell = 1; currentCell <= cellCount; currentCell++) {
            let newCell = document.createElement("div");
            newCell.classList.add("grid-cell", "black-border");
            newCell.addEventListener("hover", () => {

            });
            newRow.appendChild(newCell);
        }
    }
});

clearGridBtn.addEventListener("click", () => {

});

// Functions
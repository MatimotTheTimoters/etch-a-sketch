# etch-a-sketch

## Checklist

### Tasks:
1. Touch files:
    - [x] index.html
    - [x] styles.css
    - [x] script.js

2. Initialize index.html
    - [x] Create boilerplate
    - [x] Link styles.css
    - [x] Link script.js

3. Structure DOM in index.html
    - [x] Add a label and input for number of rows and columns for grid
    - [x] Add a grid container
    - [x] Add buttons to clear and create new grid

4. Add selectors in styles.css
    - [x] grid-container
    - [x] grid-row
    - [x] grid-cell

5. Add sections to script.js
    - [x] Variables
    - [x] Query Selectors
    - [x] Event Listeners
    - [x] Functions

6. Populate Variables section in script.js
    - [x] currentRow
    - [x] rowCount
    - [x] currentCell
    - [x] cellCount

7. Populate Query Selectors section in script.js
    - [x] rowCountInput
    - [x] loadGridBtn
    - [x] clearGridBtn
    - [x] gridContainer

8. Populate Event Listeners section in script.js
    - [x] clearGridBtn
    - [x] loadGridBtn
        - Create new grid
        - Add classes
        - Append to body
        - Refer gridContainer to it
    - [ ] loadCellsBtn
        - [x] Get value from rowCountInput
        - [x] Assign values to rowCount and cellCount
        - [x] Iterate through rows
            - [x] Create row item, and assign classes
            - [x] Iterate through current row's cells
                - [x] Create cell item, and assign classes
                - [ ] Add event listener that calls a function that changes the cell's color randomly
                - [x] Append cell item to row item

9. Fix bugs
    - [x] Space between rows
    - [x] Rows not stretching to end of grid container
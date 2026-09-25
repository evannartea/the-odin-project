const screenContainer = document.querySelector("#screen-container");
const rangeSlider = document.querySelector("#range-slider");
const rangeValue = document.querySelector("#range-value");
const MIN_GRID_SIZE = 16;

// Function to generate nxn grid of divs
/*
1x1 grid -> 100% w*h
2x2 grid -> 50% w*h
        .
        .
        .
nxn grid -> 100/n% w*h
*/
function generateGrid(n) {
    screenContainer.innerHTML = "";
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const gridTile = document.createElement("div");
            
            gridTile.style.cssText = `
                width: ${100/n}%;
                height: ${100/n}%;

                box-sizing: border-box;
                //border: 0.5px solid black;
            `;

            changeColourOnHover(gridTile);
            screenContainer.appendChild(gridTile);
        }
    }
};

// Function to change colour of <div>
function changeColourOnHover(element) {
    element.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "grey";
    });
};

// Function to display current grid size
function showCurrentGridSize(size) {
    return `${size}x${size} GRID`;
};

// Function to update grid size according to slider
function updateGridSize() {
    rangeSlider.addEventListener("input", function () {
        generateGrid(rangeSlider.value)

        rangeValue.textContent = showCurrentGridSize(rangeSlider.value);
    });
};

// Default grid
generateGrid(MIN_GRID_SIZE);
rangeValue.textContent = showCurrentGridSize(MIN_GRID_SIZE);

updateGridSize();
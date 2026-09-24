const screenContainer = document.querySelector("#screen-container");
const rangeSlider = document.querySelector("#range-slider");
const rangeValue = document.querySelector("#range-value");
const MIN_GRID_SIZE = 16;

generateGrid(MIN_GRID_SIZE);
rangeValue.textContent = `${MIN_GRID_SIZE}x${MIN_GRID_SIZE} GRID`;

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
            gridTile.classList.add("grid-tile");
            gridTile.style.cssText = `
                width: ${100/n}%;
                height: ${100/n}%;

                box-sizing: border-box;
                border: 0.5px solid #D3D3D3;
            `;

            changeColourOnHover(gridTile);
            screenContainer.appendChild(gridTile);
        }
    }
};

// Function to change colour of <div>
function changeColourOnHover(object) {
    object.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "grey";
        event.target.style.borderColor = "grey";
    });
};

// Change grid size according to slider
rangeSlider.addEventListener("input", function() {
    generateGrid(rangeSlider.value)

    // Change range value according to slider
    rangeValue.textContent = `${rangeSlider.value}x${rangeSlider.value} GRID`;
});
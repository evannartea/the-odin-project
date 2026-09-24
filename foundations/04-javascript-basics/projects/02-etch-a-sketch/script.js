const screenContainer = document.querySelector("#screen-container");

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
function changeColourOnHover(element) {
    element.addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "grey";
    });
};

generateGrid(64);
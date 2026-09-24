// Function to generate nxn grid
function generateGrid(n) {
    const screenContainer = document.querySelector("#screen-container");

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const gridTile = document.createElement("div");
            gridTile.classList.add("grid-tile");

            gridTile.style.cssText = `
                width: ${(100/n)}%;
                height: ${(100/n)}%;

                box-sizing: border-box;
                border: 1px solid grey;
            `;
            screenContainer.appendChild(gridTile);
        }
    }
};

generateGrid(2);

/*
1x1 grid -> 100% wxh
2x2 grid -> 50% wxh
        .
        .
        .
nxn grid -> 100/n% wxh
*/
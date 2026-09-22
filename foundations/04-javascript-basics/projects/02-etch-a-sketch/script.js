function generateGrid(n) {
    const screenContainer = document.querySelector("#screen-container");

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const gridTile = document.createElement("div");
            gridTile.style.cssText = `
                width: 10px;
                height: 10px;

                border: 1px solid black;
            `;
            screenContainer.appendChild(gridTile);
        }
    }
};

generateGrid(2);
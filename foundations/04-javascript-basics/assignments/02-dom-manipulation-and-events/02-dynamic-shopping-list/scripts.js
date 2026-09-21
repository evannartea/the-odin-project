const unorderedList = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", function(event) {
    event.preventDefault();

    const inputItem = input.value;
    console.log(inputItem);
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = inputItem;
    listItem.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";
    unorderedList.appendChild(listItem);

    deleteBtn.addEventListener("click", function (event) {
        unorderedList.removeChild(listItem);
    });

    input.focus();
});
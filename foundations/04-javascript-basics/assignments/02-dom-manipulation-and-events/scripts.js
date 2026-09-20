// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText)

// an <h3> with blue text that says “I’m a blue h3!”
const blueText = document.createElement("h3");
blueText.classList.add("blueText");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";
container.appendChild(blueText)

// a <div> with a black border and pink background color
const moreContent = document.createElement("div");
moreContent.classList.add("moreContent");
moreContent.style.backgroundColor = "pink";
moreContent.style.border = "1px solid black";
container.appendChild(moreContent);

// another <h1> that says “I’m in a div”
const moreContentHeading = document.createElement("h1");
moreContentHeading.classList.add("moreContentHeading");
moreContentHeading.textContent = "I'm in a div";
moreContent.appendChild(moreContentHeading);

// a < p > that says “ME TOO!”
const moreContentPara = document.createElement("p");
moreContentPara.classList.add("moreContentPara");
moreContentPara.textContent = "ME TOO!";
moreContent.appendChild(moreContentPara);
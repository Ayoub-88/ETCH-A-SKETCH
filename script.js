const gridContainer = document.querySelector(".grid-container");
function createDivs() {
    let div =  document.createElement('div');
    div.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomColor();
    })
    gridContainer.append(div);
}

for (let i = 1; i <= (16 * 16); i++) {
    createDivs();
}



function randomColor() {
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);
    let color = `rgb(${randomR},${randomG},${randomB})`;
    return color;
}


function removeChild() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function changeGrid() {
    removeChild();
    let size;
    while (true) {
        size = prompt("Enter new size: ",1);
        if (size >= 1 && size <= 64 ) {
            break;
        }
        alert("Please enter a number between 1 and 64!")
    }
    for (let i = 1; i <= (size ** 2); i++) {
        createDivs();
    }
    gridContainer.style.gridTemplateColumns = `repeat(${size}, calc(100% / ${size}))`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, calc(100% / ${size}))`;
} 

let button = document.querySelector(".button");
button.addEventListener("click", changeGrid);

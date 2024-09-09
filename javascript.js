let numPixels = 16;

function drawBoard() {
    const board = document.querySelector(".board");

    for (i = 0; i < numPixels; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (j = 0; j < numPixels; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.opacity = 0;
            row.appendChild(pixel);
        }
        
        board.appendChild(row);
    }

    document.querySelectorAll(".pixel").forEach((pixel) => {
        pixel.addEventListener("mouseenter", () => {
            pixel.style.backgroundColor = randomRGB(); 
            pixel.style.opacity = Math.min(1, parseFloat(pixel.style.opacity) + 0.1);
        })
    });
}

function randomRGB(r, g, b){
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)
    return "rgb("+r+","+g+","+b+")";
}

function promptUser() {
    response = parseInt(prompt("Enter a number of pixels per side"));
    
    if (isNaN(response)) {
        alert("Must be a number");
        return;
    } else if (response < 0) {
        alert("Must be positive");
        return;
    } else if (response > 100) {
        alert("Must be 100 or less");
        return;
    }

    numPixels = response;

    // clear board
    const board = document.querySelector(".board");
    board.replaceChildren();

    drawBoard();

}


drawBoard();

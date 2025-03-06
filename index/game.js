const clickSound = new Audio("sunete/click-circle.mp3");
const winSound = new Audio("sunete/win.mp3");

let score = 0;

function createCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.getElementById("game-area").appendChild(circle);

    circle.addEventListener("click", () => {
        clickSound.play();
        score++;
        if (score === 5) {
            winSound.play();
            endGame();
        } else {
            createCircle();
        }
    });
}

function endGame() {
    document.body.innerHTML = <h2>Congratulations! Your code: <strong>${generateCode()}</strong></h2>;
}

function generateCode() {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
}

createCircle();

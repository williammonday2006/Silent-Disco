const danceFloor = document.getElementById("danceFloor");
const dancer = document.getElementById("dancer");
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");

const originalFloorColor = "#333";

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

const panelTimer = setInterval(() => {
    panel1.style.backgroundColor = randomColor();
    panel2.style.backgroundColor = randomColor();
}, 1500);

danceFloor.addEventListener("click", () => {
    danceFloor.style.backgroundColor = randomColor();
});

dancer.addEventListener("click", (event) => {
    event.stopPropagation();
    dancer.textContent = "💃";
});

window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            dancer.textContent = "🕺";
            break;
        case "ArrowDown":
            dancer.textContent = "💃";
            break;
        case "ArrowLeft":
            dancer.textContent = "📀";
            break;
        case "ArrowRight":
            dancer.textContent = "👯‍♀️";
            break;
        case "r":
        case "R":
            danceFloor.style.backgroundColor = originalFloorColor;
            clearInterval(panelTimer);
            break;
    }
});
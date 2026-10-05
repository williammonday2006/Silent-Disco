const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

setInterval(() => {
    panel1.style.backgroundColor = randomColor();
    panel2.style.backgroundColor = randomColor();
}, 1500);

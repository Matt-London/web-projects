let purple = new Block(100, 100, 100, 100, 0, "purple", document.body, true, true, true);
let blue = new Block(100, 100, 210, 100, 0, "blue", document.body, true, true, true);
let red = new Block(100, 100, 320, 100, 0, "red", document.body, true, true, true);
let base = new Block(50, window.innerWidth - 300, 150, window.innerHeight - 55, 0, "#3CB043", document.body, true, false, false);
let left = new Block(200, (window.innerWidth - 300) / 4, 150, window.innerHeight - 305, 0, "#3CB043", document.body, true, true, false);
let right = new Block(200, (window.innerWidth - 296) / 4, window.innerWidth - 151 - ((window.innerWidth - 300) / 4), window.innerHeight - 305, 0, "#3CB043", document.body, true, true, false);

let water = new Block(200, (window.innerWidth - 300) / 2, left.right, window.innerHeight - 255, 0, "rgba(41, 83, 172, 0.8)", document.body, false, false, false);
water.div.style.pointerEvents = "none";

const blocks = [purple, blue, red, base, water, left, right];
const divs = [purple.div, blue.div, red.div, base.div, water.div, left.div, right.div];

// Main "game" loop
setInterval(() => {
    update_blocks(time_elapsed());

}, 20);
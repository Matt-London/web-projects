let wood = new Block(100, 100, 100, 100, 2, 10, true, "images/wood.jpg", document.body, true, true, true, true);
let wood2 = new Block(100, 100, 200, 100, 2, 10, true, "images/wood.jpg", document.body, true, true, true, true);
let base = new Block(50, window.innerWidth - 300, 150, window.innerHeight - 55, 1, 1, false, "#3CB043", document.body, true, false, false, false);
base.div.className = "land";
let left = new Block(200, (window.innerWidth - 300) / 4, 150, window.innerHeight - 305, 1, 1, false, "#3CB043", document.body, true, true, false, false);
left.div.className = "land";
let right = new Block(200, (window.innerWidth - 296) / 4, window.innerWidth - 151 - ((window.innerWidth - 300) / 4), window.innerHeight - 305, 1, 1, false, "#3CB043", document.body, true, true, false, false);
right.div.className = "land";

let water = new Block(200, (window.innerWidth - 300) / 2, left.right, window.innerHeight - 254, 1, 1, false, "rgba(41, 83, 172, 0.8)", document.body, false, false, false, false);
water.div.className = "water";

let scale = new Scale(75, 150, 300, 100, document.body);
let scale2 = new Scale(75, 150, 400, 100, document.body);

const blocks = [wood, wood2, base, water, left, right, scale, scale2];
const divs = [wood.div, wood2.div, base.div, water.div, left.div, right.div, scale.div, scale2.div];

load_ready = true;

// Main "game" loop
setInterval(() => {
    update_blocks(time_elapsed());

}, 20);

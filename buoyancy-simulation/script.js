// 20 pixels = 1 cm
const stage = document.getElementById("stage");

// To hold scenes later
let blocks = [];
let divs = [];

const scene = new Scene(stage);
scene.add_object(new Block(100, 100, 100, 100, 2, 10, true, "images/wood.jpg", stage, true, true, true, true));
scene.add_object(new Scale(75, 150, 300, 100, stage));

blocks = scene.block_array;
divs = scene.blockDiv_array;

load_ready = true;





// Main "game" loop
setInterval(() => {
    update_scene(scene);

    update_options();

}, 20);

// stage height / 80 = 1cm

// To hold scenes later
var blocks = [];
var divs = [];

var current_scene = SAME_MASS;

blocks = current_scene.block_array;
divs = current_scene.blockDiv_array;

load_ready = true;

load_scene(current_scene);

// Main "game" loop
setInterval(() => {
    update_scene(current_scene);

    update_options();

}, 20);

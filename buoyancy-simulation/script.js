// stage height / 80 = 1cm

// To hold scenes later
var blocks = [];
var divs = [];

var current_scene;

(async () => {
    current_scene = SAME_MASS;

    blocks = current_scene.block_array;
    divs = current_scene.blockDiv_array;

    load_ready = true;

    // await sleep(1000);

    load_scene(current_scene);


    preload_complete = true;



})();

// Main "game" loop
setInterval(() => {
    if (preload_complete) {
        update_scene(current_scene);


        update_options();
    }

}, 20);

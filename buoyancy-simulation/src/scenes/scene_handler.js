// Loads in a scene
function load_scene(scene) {
    scene.spawn_objects();

    water_element = scene.water_element;

    blocks = scene.block_array;
    divs = scene.blockDiv_array;

}

// Destructs a scene
function unload_scene(scene) {
    scene.despawn_objects();

    blocks = [];
    divs = [];
}

// Updates a scene
function update_scene(scene) {
    scene.update(time_elapsed());
}
const massElement = document.getElementById("visible-mass");
const weightElement = document.getElementById("visible-weight");
const densityElement = document.getElementById("visible-density");
const volumeElement = document.getElementById("visible-volume");

const sameMassElement = document.getElementById("same-mass");
const sameVolumeElement = document.getElementById("same-volume");
const sameDensityElement = document.getElementById("same-density");

// Grabs form data and saves to global variables
function update_options() {
    // Left portion
    show_mass = massElement.checked;
    show_weight = weightElement.checked;
    show_density = densityElement.checked;
    show_volume = volumeElement.checked;

    // Right portion
    if (sameMassElement.checked) {
        unload_scene(current_scene);
        current_scene = SAME_MASS;
        load_scene(current_scene);

    }
    else if (sameVolumeElement.checked) {
        unload_scene(current_scene);
        current_scene = SAME_VOLUME;
        load_scene(current_scene);
    }
    else if (sameDensityElement.checked) {
        unload_scene(current_scene);
        current_scene = SAME_DENSITY;
        load_scene(current_scene);
    }
}

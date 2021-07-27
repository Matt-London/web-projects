const massElement = document.getElementById("visible-mass");
const weightElement = document.getElementById("visible-weight");
const densityElement = document.getElementById("visible-density");
const volumeElement = document.getElementById("visible-volume");

// Grabs form data and saves to global variables
function update_options() {
    show_mass = massElement.checked;
    show_weight = weightElement.checked;
    show_density = densityElement.checked;
    show_volume = volumeElement.checked;
}
function update_leveler(water) {
    const leveler = document.getElementById("water-level");
    const text = document.getElementById("level-text");

    leveler.style.top = water.top - 10 +  "px";

    leveler.style.left = water.right + "px";
    text.innerHTML = (water.totalVolume + water.minVolume).toFixed(2) + " L";
    // text.innerHTML = "Nadia is so cute";

}
function update_leveler(water) {
    const leveler = document.getElementById("water-level");

    leveler.style.top = water.top - 10 +  "px";

    leveler.style.left = water.right + "px";
    leveler.innerHTML = (water.totalVolume + water.minVolume).toFixed(2) + " L";
}
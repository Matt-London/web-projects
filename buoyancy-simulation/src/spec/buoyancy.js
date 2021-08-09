// Update water level
function update_water(water) {
    // Check what blocks are in water and if a block is in water add it to the water's volume
    let externVolume = 0;

    for (let i = 0; i < blocks.length; i++) {
        // Check if it is contacting the water in some way and if it is not land
        if (blocks[i].div.className == "land" || blocks[i].div.className == "water") {
            continue;
        }

        let block = blocks[i];

        if (block.left < water.right && block.right > water.left) { // Then it's in same col
            if (block.bottom > water.top) { // Now it's in the water to some extent
                // Calculate displaced volume
                if (block.bottom - water.top >= block.height) {
                    externVolume += block.volume;
                }
                else {
                    let displacedVol = ((block.bottom - water.top) / block.height) * block.volume;
                    externVolume += displacedVol;
                }
            }

        }
    }
    water.totalVolume = externVolume;
}
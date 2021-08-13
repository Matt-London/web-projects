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

// Returns buoyancy force on the block
function get_buoyancy(block, water) {
    if (block.div.className != "block" && block.div.className != "scale") {
        return 0;
    }

    if (block.left < water.right && block.right > water.left) { // Then it's in same col
        if (block.bottom > water.top) { // Now it's in the water to some extent
            if (isWater) {
                return (block.volume / Math.pow(10, 3)) * (WATER_DENSITY * 1000) * GRAV;
            }
            else {
                return (block.volume / Math.pow(10, 3)) * (OIL_DENSITY * 1000) * GRAV;
            }

        }

    }

    return 0;

}

// Updates velocity using buoyancy
function update_buoyancy(block, dt) {
    if (!load_ready) {
        return 0;
    }
    if (block.is_clicked) {
        return 0;
    }

    let buoyantForce = get_buoyancy(block, water_element);

    if (buoyantForce == 0) {
        return 0;
    }


    // let gravForce = block.mass * GRAV;

    // block.velocity += ((buoyantForce / block.mass) - gravForce) * dt;
    block.velocity += (buoyantForce / block.mass) * cmLength * -0.5 * dt;


    // let accel = (buoyantForce - gravForce) / block.mass;
    let accel = buoyantForce / block.mass;

    let dy = Math.round(block.velocity * dt + 0.5 * accel * Math.pow(dt, 2));

    if (dy == 0) {dy = 0;}

    block.div.style.top = (block.top - dy) + "px";    



    // block.weight = block.mass * (GRAV - )

}
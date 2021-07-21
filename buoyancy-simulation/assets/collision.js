// Apply collisions
function collision() {
    for (let ai = 0; ai < blocks.length; ai++) {
        let a = blocks[ai];
        if (!a.rigid) {
            continue;
        }

        for (let bi = 0; bi < blocks.length; bi++) {
            let b = blocks[bi];
            if (a === b) {
                continue;
            }
            if (!b.rigid) {
                continue;
            }

            // Is this block in the same column?
            if (a.right > b.left && a.left < b.right) {
                // Is this block in another (this is on bottom)
                if (b.bottom > a.top && b.top < a.bottom && b.top + b.height / 2 < a.top + a.height / 2) {
                    // Stop movement
                    b.velocity = 0;
                    b.collision = true;

                    // Move out of each other
                    b.div.style.top = parseInt(a.div.style.top.slice(0, a.div.style.top.length - 2)) - b.height + 1 + "px"; 
                }
                else {
                    b.collision = false;
                }
            }
            
            else {
                b.collision = false;
            }
        }

    }
    
}

// Returns the block directly above a
function specific_collision(a) {
    for (let bi = 0; bi < blocks.length; bi++) {
        let b = blocks[bi];
        if (a === b) {
            continue;
        }
        if (!b.rigid) {
            continue;
        }

        // Is this block in the same column?
        if (a.right > b.left && a.left < b.right) {
            // Is this block in another (this is on bottom)
            if (b.bottom > a.top && b.top < a.bottom && b.top + b.height / 2 < a.top + a.height / 2) {
                return b;
            }
        }
    }
    return null;
}
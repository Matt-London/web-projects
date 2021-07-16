function spawn_block(color) {
    let block = new Block(100, 100, 100, 100, 0, color, document.body);
    blocks.push(block);
}

// Get time elapse and reset time
function time_elapsed() {
    let elapse = parseFloat(Date.now() - last_time) / 1000;
    last_time = Date.now();
    return elapse;
}

// Update each block
function update_blocks(dt) {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].update(dt);
    }
    collision();
}

// Check which div is being clicked and set it
document.addEventListener('mousedown', (event) => {
    if (event.target.className === "block") {
        blocks[divs.indexOf(event.target)].is_clicked = true;
    }

});
document.addEventListener('mouseup', () => {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].is_clicked = false;
    }
});

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
                // Is this block in another (this is on top)
                if (a.bottom > b.top && a.top < b.bottom && a.top + a.height / 2 < b.top + b.height / 2) {
                    // Stop movement
                    a.velocity = 0;
                    a.collision = true;

                    // Move out of each other
                    a.div.style.top = parseInt(b.div.style.top.slice(0, b.div.style.top.length - 2)) - a.height + 1 + "px"; 
                }
                else {
                    a.collision = false;
                }
            }
            
            else {
                a.collision = false;
            }
        }

    }
}
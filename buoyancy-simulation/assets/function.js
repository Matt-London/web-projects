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
    if (event.target.className === "block" || event.target.className === "scale") {
        blocks[divs.indexOf(event.target)].is_clicked = true;
    }

});
document.addEventListener('mouseup', () => {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].is_clicked = false;
    }
});

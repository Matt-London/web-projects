// Apply gravity by calculating change in position
function gravity(block, dt) {
    // Check if it is currently in collision
    if (!block.is_clicked && block.bottom < block.parent.offsetHeight - 4) {
        // Calculate new velocity
        block.velocity += g * dt;
        // Calculate new position
        let dy = block.velocity * dt + 0.5 * g * Math.pow(dt, 2);

        block.div.style.top = (block.top - dy) + "px";

    }

    else if (block.bottom > block.parent.offsetHeight) {
        block.div.style.top = block.parent.offsetHeight - block.height - 4 + "px";
        block.velocity = 0;
    }

    else {
        block.velocity = 0;
    }
}
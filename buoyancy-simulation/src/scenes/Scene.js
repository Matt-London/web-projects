class Scene {
    constructor(stage) {
        this.stage = stage;
        this.block_array = [];
        this.blockDiv_array = [];

        this.height = this.stage.offsetHeight - 4;
        this.width = this.stage.offsetWidth - 4;

        this.landHeight = this.height / 3.0;

        // Neededd objects for base scene
        let base = new Block(50, this.width, 0, 0, 1, 1, false, "#3CB043", this.stage, true, false, false, false);
        base.div.className = "land";
        
        let left = new Block(this.landHeight, this.width / 4, 0, 0, 1, 1, false, "#3CB043", this.stage, true, true, false, false);
        left.div.className = "land";
        
        let right = new Block(this.landHeight, this.width / 4, 0, 0, 1, 1, false, "#3CB043", this.stage, true, true, false, false);
        right.div.className = "land";

        let water = new Block(this.landHeight - 2, this.width / 2, 0, 0, 1, 1, false, "rgba(41, 83, 172, 0.8)", this.stage, false, false, false, false);
        water.div.className = "water";

        // Construct base scene
        this.add_object(base, 0, this.height - base.height);
        this.add_object(left, 0, this.height - base.height - left.height);
        this.add_object(right, this.width - right.width, this.height - base.height - right.height);
        this.add_object(water, right.right, this.height - base.height - water.height);        

    }

    add_object(block, x, y) {
        block.set_top(y);
        block.set_left(x);
        this.block_array.push(block)
        this.blockDiv_array.push(block.div);
    }

    // Runs the update function on each block
    update(dt) {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].update(dt);
            stage_collide(blocks[i], stage);
        }
        collision();
    }

    // Drops objects from stage
    despawn_objects() {
        for (let i = 0; i < this.block_array.length; i++) {
            this.stage.removeChild(this.blockDiv_array[i]);
        }
    }

    // Spawn objects
    spawn_objects() {
        for (let i = 0; i < this.block_array.length; i++) {
            this.stage.appendChild(this.blockDiv_array[i]);
        }
    }

}
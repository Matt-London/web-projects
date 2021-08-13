class Scene {
    constructor(stage) {
        this.stage = stage;
        this.block_array = [];
        this.blockDiv_array = [];

        this.height = this.stage.offsetHeight - 4;
        this.width = this.stage.offsetWidth - 4;

        // Number of pixels that 1cm is equal to
        this.cmLength = this.height / 16;
        cmLength = this.cmLength;

        this.landHeight = this.height / 3.0;

        // Needed objects for base scene
        let base = new Block(50, this.width, 0, 0, 1, 0, false, "#3CB043", this.stage, true, false, false, false);
        base.div.className = "land";
        
        let left = new Block(this.landHeight, this.width / 4, 0, 0, 1, 0, false, "#3CB043", this.stage, true, false, false, false);
        left.div.className = "land";
        
        let right = new Block(this.landHeight, this.width / 4, 0, 0, 1, 0, false, "#3CB043", this.stage, true, false, false, false);
        right.div.className = "land";

        let water = new Water(this.landHeight - 5, this.width / 2, left.right, this.height - base.height + 1, this.stage);
        water.div.className = "water";

        this.water_element = water;

        // Make public
        this.base = base;
        this.left = left;
        this.right = right;
        this.water = water;

        // Construct base scene
        this.add_base(base, 0, this.height - base.height);
        this.add_base(left, 0, this.height - base.height - left.height + 1);
        this.add_base(right, this.width - right.width, this.height - base.height - right.height + 1);
        this.add_base(water, right.right, this.height - base.height - water.height + 1);        

    }

    add_base(block, x, y) {
        block.set_top(y);
        block.set_left(x);        

        this.block_array.push(block)
        this.blockDiv_array.push(block.div);
    }

    add_object(x, y, mass, volume, image, color, parent, scale) {
        let cmSide = Math.cbrt(volume);
        let side = cmSide * this.cmLength;

        if (scale) {
            let sWidth = this.width / 13;
            let sHeight = sWidth / 2;

            this.add_base(new Scale(sHeight, sWidth, x, y, parent), x, y);
        }
        else {
            this.add_base(new Block(side, side, x, y, mass, volume, image, color, parent, true, true, true, true), x, y);
        }

    }

    // Runs the update function on each block
    update(dt) {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].update(dt);
            stage_collide(blocks[i], stage, current_scene);
        }
        collision();
        update_water(this.water);
        update_leveler(this.water);
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
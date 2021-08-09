class Water extends Block {
    constructor(maxHeight, width, left, bottomPos, parent) {
        // Call super
        super(10, width, left, bottomPos - 10, 1, 1, false, "rgba(41, 83, 172, 0.8)", parent, false, false, false, false);
        this.width = width;
        this.left = left;
        this.bottomPos = bottomPos;
        this.bottom = bottomPos;
        this.parent = parent;
        this.height = 10;
        
        this.set_level(this.volume);

        this.maxVolume = 98 + 15 + 2 + 2;
        this.minVolume = 98;
        this.maxHeight = maxHeight;

        this.totalVolume = this.minVolume;
        
        this.minHeight = this.minVolume * this.maxHeight / this.maxVolume;
        this.height = this.minHeight;


        

    }

    // Set water level with volume
    set_level() {
        this.height = (this.totalVolume + this.minVolume) * this.maxHeight / this.maxVolume;

    }

    update(dt) {
        this.bottom = this.bottomPos;
        this.div.style.top = this.bottomPos - this.height + "px";
        this.set_level();
        super.update(dt);
    }
}
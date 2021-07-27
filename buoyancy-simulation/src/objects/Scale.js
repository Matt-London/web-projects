class Scale extends Block {
    constructor(height, width, left, top, parent) {
        // Call super
        super(height, width, left, top, 50, 10, false, "none", parent, true, true, true, true);

        this.height = height;
        this.width = width;

        this.scale_color = "grey";

        this.div.className = "scale";


        // Build visible scale
        this.head = document.createElement("div");
        this.shaft = document.createElement("div");
        this.base = document.createElement("div");
        this.text = document.createElement("div");

        // Assemble head
        this.head.style.width = this.width + "px";
        this.head.style.height = Math.round(this.height / 5) + "px";
        this.head.style.backgroundColor = this.scale_color;
        this.head.style.borderRadius = "1rem";

        // Assemble shaft
        this.shaft.style.width = "20px";
        this.shaft.style.height = Math.round(1.5 * this.height / 5) + "px";
        this.shaft.style.backgroundColor = this.scale_color;

        // Assemble base
        this.base.style.width = this.width + "px";
        this.base.style.height = Math.round(2.5 * this.height / 5) + "px";
        this.base.style.backgroundColor = this.scale_color;
        
        // Build text
        this.base.appendChild(this.text);
        this.base.style.position = "relative";
        this.text.style.position = "absolute";
        this.text.style.top = "50%";
        this.text.style.left = "50%";
        this.text.style.transform = "translate(-50%, -50%)";
        this.text.style.textAlign = "center";
        this.text.style.backgroundColor = "orange";
        this.text.style.borderRadius = "1rem";
        this.text.style.padding = "5px";
        this.text.style.fontSize = "22px";

        // Allow passthrough
        this.head.style.pointerEvents = "none";
        this.shaft.style.pointerEvents = "none";
        this.base.style.pointerEvents = "none";
        this.text.style.pointerEvents = "none";

        // Align shaft
        this.div.style.textAlign = "center"
        this.shaft.style.display = "inline-block";
        this.shaft.style.margin = "0 auto";
        

        this.div.appendChild(this.head);
        this.div.appendChild(this.shaft);
        this.div.appendChild(this.base);    

    }

    // Update scale
    update(dt) {
        if (!load_ready) {
            return;
        }
        super.update(dt);
        this.text.innerHTML = this.loadTotal;
    }
}
class Block {
    // ====================== Constructors ======================
    constructor(height, width, left, top, weight, color, parent, rigid, gravity, mobile) {
        this.height = parseInt(height);
        this.width = parseInt(width);
        this.weight = parseInt(weight);
        this.color = color;

        this.rigid = rigid;
        this.mobile = mobile;
        this.has_gravity = gravity;

        this.left = parseInt(left);
        this.top = parseInt(top);

        this.parent = parent;

        // Calc bottom and right
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;

        // velocity and stuff
        this.velocity = 0;
        this.is_clicked = false;
        this.collision = false;

        this.div = document.createElement("div");

        if (this.mobile) {
            dragElement(this.div);
        }
        
        this.build();

        // // Add event listener for click to update position
        // this.div.addEventListener('click', () => {
        //     this.update();
        // });
    }

    // ====================== Getters ======================
    get_height() {
        return this.height;
    }
    get_width() {
        return this.width;
    }
    get_weight() {
        return this.weight;
    }
    get_color() {
        return this.color;
    }
    get_left() {
        return this.left;
    }
    get_top() {
        return this.top;
    }

    // ====================== Setters ======================
    set_height(h) {
        this.height = h;
        this.update();
    }
    set_width(w) {
        this.width = w;
        this.update();
    }
    set_weight(w) {
        this.weight = w;
        this.update();
    }
    set_color(c) {
        this.color = c;
        this.update();
    }
    set_left(l) {
        this.left = l;
        this.update();
    }
    set_top(t) {
        this.top = t;
        this.update();
    }

    // Updates position and what-not
    update(dt) {
        this.div.style.height = this.height + "px";
        this.div.style.width = this.width + "px";
        this.div.style.backgroundColor = this.color;
        this.top = parseInt(this.div.style.top.slice(0, this.div.style.top.length - 2));
        this.left = parseInt(this.div.style.left.slice(0, this.div.style.left.length - 2));
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;

        this.update_position(dt);

        
    }

    // Build object in dom
    build() {
        if (this.mobile) {
            this.div.style.cursor = "pointer";
        }

        this.div.style.position = "absolute";
        this.div.className = "block";
        this.div.style.top = this.top + "px";
        this.div.style.left = this.left + "px";
        this.update(time_elapsed());
        this.parent.appendChild(this.div);
    }

    // Apply gravity by calculating change in position
    gravity(dt) {
        // Check if it is currently in collision
        if (!this.is_clicked && this.bottom < window.innerHeight - 10) {
            // Calculate new velocity
            this.velocity += g * dt;
            // Calculate new position
            let dy = this.velocity * dt + 0.5 * g * Math.pow(dt, 2);

            this.div.style.top = (this.top - dy) + "px";

        }

        else {
            this.velocity = 0;
        }
    }

    // Apply velocity to update position
    update_position(dt) {
        // Run gravity
        if (!this.collision && this.has_gravity) {
            this.gravity(dt);
        }
    }

}
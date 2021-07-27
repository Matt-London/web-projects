class Block {
    // ====================== Constructors ======================
    constructor(height, width, left, top, mass, volume, image, color, parent, rigid, gravity, mobile, displayable) {
        this.height = parseInt(height);
        this.width = parseInt(width);
        this.mass = parseInt(mass);
        this.volume = parseInt(volume);
        this.density = parseFloat(mass / 1.0 / volume);
        this.color = color;
        this.image = image;

        this.displayable = displayable;

        this.weight = mass;

        this.loadTotal = 0;

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

        this.display = document.createElement("div");
        this.display.className = "display";
        this.display.style.pointerEvents = "none";
        this.div.appendChild(this.display);

        if (this.mobile) {
            dragElement(this.div);
        }
        
        this.build();

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
    }
    set_width(w) {
        this.width = w;
    }
    set_weight(w) {
        this.weight = w;
    }
    set_color(c) {
        if (!this.image) {
            this.color = c;
        }
    }
    set_left(l) {
        this.div.style.left = l + "px";
    }
    set_top(t) {
        this.div.style.top = t + "px";
    }

    // Updates position and what-not
    update(dt) {
        this.div.style.height = this.height + "px";
        this.div.style.width = this.width + "px";
        if (!this.image) {
            this.div.style.backgroundColor = this.color;
        }
        this.top = parseInt(this.div.style.top.slice(0, this.div.style.top.length - 2));
        this.left = parseInt(this.div.style.left.slice(0, this.div.style.left.length - 2));
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;

        this.update_position(dt);

        this.loadTotal = this.update_load();

        this.update_weight();

        this.update_visible();
        
    }

    // Build object in dom
    build() {
        if (this.mobile) {
            this.div.style.cursor = "pointer";
        }

        if (this.image) {
            this.img = document.createElement('img');
            this.img.src = this.color;
            this.img.alt = "Image of material";
            this.img.style.height = this.height;
            this.img.style.width = this.width;
            this.img.style.pointerEvents = "none";
            this.div.appendChild(this.img);
        }

        this.div.style.position = "absolute";
        this.div.className = "block";
        this.div.style.top = this.top + "px";
        this.div.style.left = this.left + "px";
        this.update(time_elapsed());
        this.parent.appendChild(this.div);
    }

    // Calculates the weight of the block
    update_weight() {
        this.weight = this.mass;
    }

    // Apply gravity by calculating change in position
    gravity(dt) {
        // Check if it is currently in collision
        if (!this.is_clicked && this.bottom < this.parent.offsetHeight - 4) {
            // Calculate new velocity
            this.velocity += g * dt;
            // Calculate new position
            let dy = this.velocity * dt + 0.5 * g * Math.pow(dt, 2);

            this.div.style.top = (this.top - dy) + "px";

        }

        else if (this.bottom > this.parent.offsetHeight) {
            this.div.style.top = this.parent.offsetHeight - this.height - 4 + "px";
            this.velocity = 0;
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

    // Updates weightotal with total weight above
    update_load() {
        if (!load_ready) {
            return 0;
        }
        let total_load = 0;
        let collideBlock = specific_collision(this);
        if (collideBlock) {
            let collideBlock = specific_collision(this);
            total_load += collideBlock.weight + collideBlock.update_load();

        }
        else {
            return 0;
        }
        this.loadTotal = total_load;
        return total_load;

    }

    // Updates with what values need to be visible
    update_visible() {
        if (this.displayable) {
            let info = "";
            if (show_mass) {
                info += this.mass + " kg<br>";
            }
            if (show_volume) {
                info += this.volume + " m^3<br>";
            }
            if (show_weight) {
                info += this.weight + " N<br>";
            }
            if (show_density) {
                info += this.density + " kg/m^3";
            }

            this.display.innerHTML = info;
        }
    }

}
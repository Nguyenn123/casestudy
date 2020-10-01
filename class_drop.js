function Drop(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.rotate = - 1.5559;
    this.speed = 10;
    this.toDel = false;

    this.show = function() {
        push()
        translate(this.x, this.y + 10);
        rotate(this.rotate);

        for(let i = 0; i > -5 ; i--) {
            fill(color(255, 255, 255, 255 + i * 12));
            rect(i * this.speed * 0.5 + 60 + this.speed * 9, 0, 8, 6 + i * 0.1);
        }
        pop();
    }

    this.move = function() {
        this.y = this.y - this.speed;
    }

    this.hits = function(chicken) {
        let d = dist(this.x, this.y, chicken.x, chicken.y);
        if (d < this.r + chicken.r + 10) {
            return true;
        }

        return false;
    }

    this.remove = function () {
        this.toDel = true;
    }
}
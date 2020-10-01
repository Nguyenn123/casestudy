function Chicken(x, y) {
    this.blood = 2;
    this.x = x;
    this.y = y;
    this.rotate = 1.5559;
    this.r = 20;
    this.xdir = 1;

    this.show = function() {
        push();
        translate(this.x, this.y);
        scale(0.8, 0.8);
        rotate(this.rotate);
        // vẽ gà
        fill('#6ed454');
        ellipse(0, 0, 40, 40);
        fill('#d468cd');
        ellipse(5, 0, 25, 25);
        fill('red');
        ellipse(17, 0, 20, 20);
        pop();
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }

    this.subBlood = function() {
        this.blood -= 2;
    }
}
function Ship() {
    this.x = width / 2 ;
    this.xdir = 0;

    this.show = function() {
        // vẽ phi thuyền
        push();
        translate(this.x, height - 10);
        scale(0.8, 0.8);
        fill('#4ac329');
        rect(0, 0, 60, 35);
        fill('#d5cd89');
        rect(0, -20, 10, 50);
        pop();
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    this.move = function() {
        this.x += this.xdir*6;
    }
}
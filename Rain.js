class Rain {
    constructor(x,y) {
        var op={
            friction: 0.001,
            density: 0.01,
            isStatic: false,
            restitution: 0.1
            
        }
        this.body = Bodies.circle(x, y, 1.5, op);
        this.radius = 1.5;
        World.add(world, this.body);

    }
    updateDrops() {
        if(this.body.position.y > height)
        Matter.Body.setPosition(this.body, {x : Math.round(random(0,width)), y: 0})
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        stroke("blue");
        strokeWeight(1);
        circle(0,0,this.radius*2);
        pop();
    }
}
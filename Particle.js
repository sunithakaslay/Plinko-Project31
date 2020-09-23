class Particle {
    constructor(x,y,radius){
        var options = {
            'restitution' :0.8
        }
        this.x = x;
        this.y = y;
        this.color = color(random(0,255),random(0,255), random(0,255));
        this.body = Bodies.circle(x,y,radius, options);
        
        World.add(myworld,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0,this.body.circleRadius, this.body.circleRadius);
        pop();
    }
}
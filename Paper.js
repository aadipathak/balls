class paper{
    constructor(x,y,radius){
    var options = {
        'restitution' : 1,
      'friction':0,
      'density':0,
      'isStatic': false
    }
    this.body = Bodies.circle(x,y,radius,options);
  this.radius = radius ;
    World.add(world,this.body);

    }
    display(){
        ellipseMode(RADIUS);
        fill(255,0,0);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}
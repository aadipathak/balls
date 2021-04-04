class dustbin{
    constructor(x,y,width,height){
    var options = {
        'restitution' : 0,
      'friction':0.2,
      'density':1,
      'isStatic':false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        fill(255,0,0);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
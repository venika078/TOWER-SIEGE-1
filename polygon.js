class Polygon{
    constructor(x,y,radius){
        var options = {
            'stiffness' : 9,
            'friction' : 9,
            'density' : 1.0
            
        }
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(150,200,5,options);
        this.x=x;
        this.y=y;
        this.width = 40;
        this.height = 40;
       World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         imageMode(CENTER);
         image(this.image,pos.x,pos.y,40,40);
    }
}
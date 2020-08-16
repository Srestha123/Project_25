class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
            
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body);
    }
    display(){
        var a= this.body.position;
        imageMode(CENTER);
        image( this.image,a.x,a.y-60,this.width+10,this.height+10);
    }
}
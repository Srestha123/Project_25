class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            density:2.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var a= this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(a.x,a.y,this.width,this.height);
    }
}
class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            
            density:1.2,
            
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
       this.image= loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var a=this.body.position;
        imageMode(CENTER);
        
        image(this.image,a.x,a.y+15,100,100);
    }
    motion(){
     if(keyCode === UP_ARROW) {
         Matter.Body.applyForce(this.body,this.body.position,{x:5,y:-20});
       
     }
     
    }
}
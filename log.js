class Log{
    constructor(x,y){

        var options = {
        isStatic: true
        
        }
        this.body = Bodies.rectangle(x,y,10,5,options);
        World.add(world,this.body);
        
        
        }
        display(){
        
        var pos = this.body.position;
        fill ("brown");
        push ()
        angleMode(DEGREES);
        translate (pos.x,pos.y);
        rotate (45)
        rectMode(CENTER);
        rect(0,0,30,5);
        pop ();
        }
        
        
        



















}
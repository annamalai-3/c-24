class Bird{
constructor(x,y){

this.body = Bodies.rectangle(x,y,20,20);
World.add(world,this.body);

}

display(){
var pos = this.body.position;
 fill ("red");
rectMode(CENTER);
rect(pos.x,pos.y,20,20);

}





}
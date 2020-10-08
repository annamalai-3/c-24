class Pig {

constructor(x,y){

var options = {
isStatic: true

}
this.body = Bodies.rectangle(x,y,30,30,options);
World.add(world,this.body);


}
display(){

var pos = this.body.position;
fill ("green");
rectMode(CENTER);
rect(pos.x,pos.y,30,30);

}




}
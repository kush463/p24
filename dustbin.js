class dustbin{
    constructor(x,y,width,height){
    var option ={
        'restitution': 1
    }
    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    //World.add(orld , this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x,pos.y,this.width,this.height);
    }
};
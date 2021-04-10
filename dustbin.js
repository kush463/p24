class dustbin{
    constructor(x,y){
    var option ={
      isStatic: true
    }
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.thickness = 20;
    this.bottombody = Bodies.rectangle(this.x,this.y,this.width,this.thickness/10,option);
    this.leftbody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,option);
    this.rightbody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,option);
   
    World.add(world , this.bottombody);
    World.add(world , this.leftbody);
    World.add(world , this.rightbody);

  }
    display(){
      var posBottom = this.bottombody.position;
      var posLeft = this.leftbody.position;
      var posRight = this.rightbody.position;
      
      
      push();
      translate(posBottom.x,posBottom.y);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.width,this.thickness);
      pop();

      push();
      translate(posLeft.x,posLeft.y);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.thickness,this.height);
      pop();

      push();
      translate(posRight.x,posRight.y);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.thickness,this.height);
      pop();
    }
};
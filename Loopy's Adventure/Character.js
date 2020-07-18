class Character {
    constructor(x,y) {
      this.character=createSprite(x,y,50,50);
    this.image=loadImage("images/Loopy's.png")    
}
move(){
if(keyDown(LEFT_ARROW)){
this.character.x=this.character.x -5
}
if(keyDown(RIGHT_ARROW)){
    this.character.x=this.character.x +5
}
}
jump(){
    if(keyDown(UP_ARROW)){
        this.character.velocityY=-5
    }
this.character.velocityY=this.character.velocityY+0.5
}
  display(){
    this.character.addImage(this.image);
    drawSprites();
  }
}
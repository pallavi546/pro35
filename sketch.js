
var balloon
var balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition.showError);

function preload(){
now=loadImage("h.png");
balloon1=loadImage("hm.png");
balloon2=loadImage("hmm.png");
balloon3=loadImage("hmmm.png");


}

function setup() {
  createCanvas(500,500);
  balloon=createSprite(200, 200,20,20);
  balloon.addImage(balloon1)
  balloon.scale=0.3
  
}

function draw() {
  background(now);  
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x+10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y=balloon.y+10
  }
  
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x':height.x+x,
    'y':height.y+y
  })
}
function readHeight(data){
  height=data.val();
  balloon.x=height.x;
  balloon.y=height.y;
}
function showError(){
  console.log("Error in writing to the database")
}

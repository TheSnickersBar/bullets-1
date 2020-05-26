var thickness, wall;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 20, 50, 50);

  bullet.shapeColor = "white";
  thickness = random(22,83);
  wall = createSprite(1200,200, thickness, 400);
  wall.shapeColor = "white";
  speed = random(223,321);
  bullet.velocityX = speed;
  weight=random(30,52);

  
 }

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet,wall)) {
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness * thickness);


      if(damage>10) {
          wall.shapeColor = color(255,0,0);
      }
       
      if(damage<10) {
          wall.shapeColor = color(0,255,0);
      }
    }
      1 
  drawSprites();

}

function hasCollided(lbullet,lwall) {
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    if (bulletRightEdge >= wallLeftEdge) {
        return true;
    }
    return false;
}
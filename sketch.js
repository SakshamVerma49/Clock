function setup(){
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw(){
  background("grey");
  translate(300, 300);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  //Second Hand 

  strokeWeight(7);
  stroke(255, 0, 0);
  scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);

  //Minute Hand 

  //strokeWeight(7);
  stroke(0, 255, 0);
  mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);

  //Hour Hand 

  //strokeWeight(7);
  stroke(0, 0, 255);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);
  
  //Second line movement 
  
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  line(0, 0, 100, 0);
  pop();

  //Minute line movement 
  
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  line(0, 0, 80, 0);
  pop();
  
  //Hour line movement 
  
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  line(0, 0, 60, 0);
  pop();

  //center point

  stroke(300);
  point(0, 0);

  drawSprites();
}
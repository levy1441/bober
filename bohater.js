class bohater {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.patyki = 0;
  }
  draw() {
    this.y = constrain(this.y,  0, height-50);
    fill("brown");      
    circle(this.x,this.y,30);
    circle(this.x+5,this.y-25 ,30);
    fill("#fff");
    rect(this.x+15,this.y-25,5,15);
    circle(this.x+10,this.y-30,10);
  }
  up() {
    this.y -= 5;
  }
  down() {
    this.y += 5;
  }
  czydotyka(patyk) {
    if (dist(this.x,this.y,patyk.x,patyk.y)<30) 
        {
          patyk.y = -400;
          punkty++;
        }
  }
  czydotyka(patyk) {
    if (dist(this.x+5,this.y-25,patyk.x,patyk.y)<30) 
        {
          patyk.y = -400;
          punkty++;
        }
  }
}
class patyk{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  draw() {
    push()
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
    pop()
  }
}
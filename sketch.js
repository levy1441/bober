let bober = new bohater(100,300);
let patyki = [];
let punkty = 0;
let zycia = 3;
let gra = false;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(227, 254, 255);
  if(gra){
  fill(130, 79, 43);
  rect(0, height*0.90, width, height*0.10);
  if(keyIsPressed && keyCode==32){
    bober.up()
  }
  else {
    bober.down()
  }
    bober.draw();
  for (var i = 0; i < patyki.length; i++) {
        patyki[i].draw();
        bober.czydotyka(patyki[i])
        patyki[i].x -= 1;
    }
  fill("#000")
  textSize(20);
  text("Punkty:"+ punkty, 10,15);
  
  if(punkty==1000){
    text("Zaczynamy od początku", 50,50);
    for(i=0; i<patyki.length; i++){
      patyki.pop()
    }
  }
  }
  else{
    if(keyIsPressed && key == "t"){
    for (let i=0; i<1300; i++){
      patyki.push(new patyk(i * 40 + 300, random(20, 260))); 
        //alert("Koniec Gry mam nadzieje że bawiłeś się dobrze, aby zacząć jeszcze raz naciśnij 'T' i baw się od nowa!!!!")  
    }
    gra = true;
    }
  }
}

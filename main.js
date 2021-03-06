//elephant and cakes
"use strict";
const gameEngine = new GameEngine();

//information for elephant
let elformation = {
  //place
  x:25,
  y:25,
  //color
  r:250,
  g:0,
  b:0,
  a:255
}

//showing the elephant
function ele_show(x, y, r, g, b, a, gameEngine) {
  let position =[];
  let posit1 = [];
  let posit2 = [];

  for (let i=0; i<10; i+=1) {
    //the y
    for (let j=0; j<10; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  for (let k=0; k<13; k+=1) {
    //the y
    for (let q=0; q<13; q+=1) {
      position.push([x+k+7, y+q+2]);
      position.push([x-k-7, y+q+2]);
    }
  }

  for (let m=0; m<5; m+=1) {
    //the y
    for (let b=0; b<10; b+=1) {
      position.push([x-m, y-b-10]);
      position.push([x+b, y-m-15]);
    }
  }

  //eyes
  for (let e=2; e<7; e+=1) {
    for (let h=-1; h<3; h+=1) {
      posit1.push([x+e, y+h]);
      posit1.push([x-e, y+h]);
    }
  }

  for (let e=3; e<5; e+=1) {
    for (let h=0; h<2; h+=1) {
      posit2.push([x+e, y+h]);
      posit2.push([x-e, y+h]);
    }
  }

  gameEngine.fillPixels(position, r, g, b, a);
  gameEngine.fillPixels(posit1, 255, 255, 255, 255);
  gameEngine.fillPixels(posit2, 0, 0, 0, 255);
}

//ele_check(elformation.x, elformation.y, gameEngine);
function ele_check(x, y, gameEngine) {
  if (y > gameEngine.getScreenHeight()) {
    elformation.y-=gameEngine.getScreenHeight();
  }

  if (y < 0) {
    elformation.y+=gameEngine.getScreenHeight();
  }

  if (x > gameEngine.getScreenWidth()) {
    elformation.x-=gameEngine.getScreenWidth();
  }

  if (x < 0) {
    elformation.x+=gameEngine.getScreenWidth();
  }
}

//un-showing old elephant
//showing the elephant
function ele_delete(x, y, r, g, b, a, gameEngine) {
  let position =[];

  for (let i=0; i<10; i+=1) {
    //the y
    for (let j=0; j<10; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  for (let k=0; k<13; k+=1) {
    //the y
    for (let q=0; q<13; q+=1) {
      position.push([x+k+7, y+q+2]);
      position.push([x-k-7, y+q+2]);
    }
  }

  for (let m=0; m<5; m+=1) {
    //the y
    for (let b=0; b<10; b+=1) {
      position.push([x-m, y-b-10]);
      position.push([x+b, y-m-15]);
    }
  }
  gameEngine.fillPixels(position, r, g, b, a);
}

//movment- checks to where and modify. need to write in a way that will after show new elephant
function moveElephent(speed)
{
  if(gameEngine.isKeyHeld("ArrowRight"))
  {
    elformation.x+=speed;
  }

  if(gameEngine.isKeyHeld("ArrowLeft"))
  {
     elformation.x-=speed;
  }

  if(gameEngine.isKeyHeld("ArrowUp"))
  {
    elformation.y+=speed;
  }

  if(gameEngine.isKeyHeld("ArrowDown"))
  {
    elformation.y-=speed;
  }  
}

//showing the cupcake
function cupcake_show(x, y, gameEngine) {
  let position =[];
  let posit = [];

  for (let i=0; i<7; i+=1) {
    //the four pettles
    for (let j=0; j<7; j+=1) {
      position.push([x+i+3, y+j+3]);
      position.push([x-i-3, y+j+3]);
      position.push([x+i+3, y-j-3]);
      position.push([x-i-3, y-j-3]);
    }
  }

  //the middle
  for (let i=0; i<3; i+=1) {
    for (let j=0; j<3; j+=1) {
      posit.push([x+i, y+j]);
      posit.push([x-i, y+j]);
      posit.push([x+i, y-j]);
      posit.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, 255, 255, 0, 255);
  gameEngine.fillPixels(posit, 170, 90, 20, 255);
}

//delete cupcake
function cupcake_delete(x, y, gameEngine) {
  let position =[];

  for (let i=0; i<9; i+=1) {
    //the y
    for (let j=0; j<9; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<9; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, 190, 70, 210, 50);
}

//showing the super cupcake
function flower_show(x, y, gameEngine) {
  let position =[];
  let posit =[];

  for (let i=0; i<9; i+=1) {
    //the y
    for (let j=0; j<9; j+=1) {
      position.push([x+i+4, y+j+4]);
      position.push([x-i-4, y+j+4]);
      position.push([x+i+4, y-j-4]);
      position.push([x-i-4, y-j-4]);
    }
  }

  for (let i=0; i<4; i+=1) {
    for (let j=0; j<4; j+=1) {
      posit.push([x+i, y+j]);
      posit.push([x-i, y+j]);
      posit.push([x+i, y-j]);
      posit.push([x-i, y-j]);
    }
  }
  gameEngine.fillPixels(posit, 100, 30, 150, 255);
  gameEngine.fillPixels(position, 255, 0, 127, 255);
}

//delete super cupcake
function flower_delete(x, y, gameEngine) {
  let position =[];

  for (let i=0; i<11; i+=1) {
    //the y
    for (let j=0; j<11; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<11; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, 255, 0, 127, 50);
}

//cupcake place
let cupdinate = {
  x:Math.floor(Math.random() * 840),
  y:Math.floor(Math.random() * 450)
}

//random function
function rancake() {
  let ranx = Math.floor(Math.random() * 820);
  let rany = Math.floor(Math.random() * 430);
  return [ranx, rany];
}

let gameformation= {
  //cakes eaten
  caked:0,
  //loops done
  looped:0,
  //
  time:0,
  //games won
  wins:0,
  loses:0,
  //super flowers
  flower:0,
  speed:1
} 

function clear (r, g, b, a, gameEngine) {
  let position = [];
  for (let i=0; i<860; i+=1) {
    //the y
    for (let j=0; j<478; j+=1) {
      position.push([i, j]);
    }
  }
  gameEngine.fillPixels(position, r, g, b, a);
}


//main function
function mainLoop(data) 
{  
  //start game writing
  if ((gameformation.caked===0)&&(gameformation.looped===0)) 
  {
    if (gameformation.wins===0 && gameformation.loses===0) {
      gameEngine.playSound("drumroll");
      gameEngine.writeParagraph("<b style='font-size:17px'>welcome!</br>direct the elephant to eat flowers</br>press arrors to move elephant</br>play with screen at 70%</br>don't waste time</br>or the elephant will get hungry again</br>if you can feed him enough you win!</br>the color of the elephant changes</br>and indicates how hungry he is</br>red=hungry</br>blue=less hungry</b>");
    }

    console.log("the elephant is hungry. feed it or be food!");
    gameEngine.playSound("ele");

    if (gameformation.wins===0 && gameformation.loses===0) {
      gameEngine.playSound("one");
    }    
  }

  //time element
  if (gameformation.looped>=500 && gameformation.caked>1) {
    gameEngine.playSound("incorrect");
    gameformation.looped=0;
    gameformation.time+=1;
    elformation.b-=10;
    elformation.r+=10;
    console.log ("too much time has passed! one flower less");
    gameEngine.writeParagraph("<b style='font-size:30px'>to much time</br>minus 1 flower</b>");
    gameEngine.playSound("badBoing");
  }

  //checks if cake eaten-regular cake
  if ((Math.abs(cupdinate.x - elformation.x)<=35) && (Math.abs(cupdinate.y - elformation.y)<=35)&&(gameformation.flower===0)) {
    cupcake_delete(cupdinate.x, cupdinate.y, gameEngine);
    gameformation.speed+=1;
    gameformation.caked+=1;
    elformation.b+=10;
    elformation.r-=10;
    gameformation.looped=0;

    //checks if time for flower
    if ((gameformation.caked%5)===0 && gameformation.caked!==0) {
      let new1 = rancake();
      cupdinate.x = new1[0];
      cupdinate.y = new1[1];
      flower_show(cupdinate.x, cupdinate.y, gameEngine);
      gameformation.flower=1;
    }

    //not time for flowers
    else  {
      let new1 = rancake();
      cupdinate.x = new1[0];
      cupdinate.y = new1[1];
      cupcake_show(cupdinate.x, cupdinate.y, gameEngine);
    }
 
    console.log ("flowers eaten: ", gameformation.caked);
    gameEngine.writeParagraph("<b style='font-size:30px'>flowers eaten:</br>"+gameformation.caked+"</b>");
    gameEngine.playSound("reminder");
  }

  //checks if flower was eaten
  else if ((Math.abs(cupdinate.x - elformation.x)<=35) && (Math.abs(cupdinate.y - elformation.y)<=35)&&(gameformation.flower===1)) {
    flower_delete(cupdinate.x, cupdinate.y, gameEngine);
    let new1 = rancake();
    cupdinate.x = new1[0];
    cupdinate.y = new1[1];
    cupcake_show(cupdinate.x, cupdinate.y, gameEngine);
    gameEngine.playSound("chime");
    let add1= Math.floor(Math.random() * 3 + 1);
    console.log("that was equel to ", add1, "regular flowers");
    gameformation.caked+=add1;
    elformation.b+=10*add1;
    elformation.r-=10*add1;
    console.log ("flowers eaten: ", gameformation.caked);
    gameEngine.writeParagraph("<b style='font-size:30px'>worth "+add1+" flowers</br>flowers eaten:</br>"+gameformation.caked+"</b>");
    gameformation.flower=0;
    gameformation.looped=0;
  }

  //when time for super flower
  if (((gameformation.caked%5)===0)&&(gameformation.flower===0)&&(gameformation.caked!==0)) {
    let new1 = rancake();
    cupdinate.x = new1[0];
    cupdinate.y = new1[1];
    flower_show(cupdinate.x, cupdinate.y, gameEngine);
    gameformation.flower=1;
  }

  else {

    if (gameformation.flower===0){
      cupcake_show(cupdinate.x, cupdinate.y, gameEngine);
    }

    if (gameformation.flower===1){
      flower_show(cupdinate.x, cupdinate.y, gameEngine);
    }

    gameformation.looped+=1;
  }

  ele_delete(elformation.x, elformation.y, elformation.r, elformation.g, elformation.b, 100, gameEngine);
  moveElephent(gameformation.speed);
  ele_check(elformation.x, elformation.y, gameEngine);
  ele_show(elformation.x, elformation.y, elformation.r, elformation.g, elformation.b, elformation.a, gameEngine);

  //winning
  if  (elformation.r<=0) {
    gameEngine.playSound("crowdCheer");
    gameformation.caked=0;
    gameformation.looped=0;
    gameformation.flower=0;
    elformation.x=25;
    elformation.y=25;
    elformation.r=250;
    elformation.g=0;
    elformation.b=0;
    elformation.a=255;
    gameformation.wins+=1;
    gameformation.speed=gameformation.wins+1;
    console.log ("the elephant is full. he won't eat you today. but there are more elephants!");

    //let coly = gameformation.wins*50;
    clear(255, 255, 255, gameformation.wins*50, gameEngine);

    gameEngine.writeParagraph("<b style='font-size:30px'>Well done!</br>games won: "+(gameformation.wins)+"</br>games lost: "+(gameformation.loses)+"</b>");
    console.log ("you have fed ", gameformation.wins, "elephants!");
    gameEngine.playSound("victoryConfetti");
  }

  //lose
  if (elformation.b<=0 && gameformation.caked>1) {
    gameEngine.playSound("ohNo");
    gameformation.caked=0;
    gameformation.looped=0;
    elformation.x=25;
    elformation.y=25;
    elformation.r=250;
    elformation.g=0;
    elformation.b=0;
    elformation.a=255;
    gameformation.loses+=1;
    gameformation.speed=gameformation.wins+1;
    console.log ("the elephant ate you. but there are more people to feed the elephant!");

    //let coly = gameformation.wins*50;
    clear(255, 255, 255, gameformation.wins*50, gameEngine);

    gameEngine.writeParagraph("<b style='font-size:30px'>oh no!</br>the elephant ate you!</br>games won: "+(gameformation.wins)+"</br>games lost: "+(gameformation.loses)+"</b>");
    console.log ("you have fed ", gameformation.wins, "elephants!");
    gameEngine.playSound("windowBreak");
  }
}

gameEngine.startMainLoop(mainLoop, {});

//cupcake function
"use strict";
const gameEngine = new GameEngine();

function cupcake_show(x, y, size, r, g, b, gameEngine) {
  let position =[];

  for (let i=0; i<size; i+=1) {
    //the y
    for (let j=0; j<size; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<size; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, r, g, b, 255);
}

function cupcake_delete(x, y, size, r, g, b, gameEngine) {
  let position =[];

  for (let i=0; i<size; i+=1) {
    //the y
    for (let j=0; j<size; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<size; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, r, g, b, 200);
}

let cupdinate = {
  x:25,
  y:25,
  size:1,
  r:1,
  g:1,
  b:1
}

function rancake() {
  let ranx = Math.floor(Math.random() * 860);
  let rany = Math.floor(Math.random() * 478);
  return [ranx, rany];
}

function mainLoop(data) {

  if (gameEngine.isKeyHeld("l")){
    cupdinate.size+=1;

  }

  //green
  if (gameEngine.isKeyHeld("g")){
    cupdinate.g=255;
    cupdinate.r=0;
    cupdinate.b=0;
  }

  //red
  if (gameEngine.isKeyHeld("r")){
    cupdinate.r=255;
    cupdinate.g=0;
    cupdinate.b=0;
  }

  //blue
  if (gameEngine.isKeyHeld("b")){
    cupdinate.b=255;
    cupdinate.r=51;
    cupdinate.g=51;
  }

  //orange
  if (gameEngine.isKeyHeld("o")){
    cupdinate.b=0;
    cupdinate.r=255;
    cupdinate.g=128;
  }

  //purpule
  if (gameEngine.isKeyHeld("p")){
    cupdinate.r=178;
    cupdinate.g=102;
    cupdinate.b=255;
  }

  //yellow
  if (gameEngine.isKeyHeld("y")){
    cupdinate.r=255;
    cupdinate.g=255;
    cupdinate.b=0;
  }

  //white
  if (gameEngine.isKeyHeld("w")){
    cupdinate.r=255;
    cupdinate.g=255;
    cupdinate.b=255;
  }


  if (gameEngine.isKeyHeld(" ")) {
    cupcake_delete(cupdinate.x, cupdinate.y, cupdinate.size, cupdinate.r, cupdinate.g, cupdinate.b, gameEngine)
    let new1 = rancake();
    cupdinate.x = new1[0];
    cupdinate.y = new1[1];
    cupcake_show(cupdinate.x, cupdinate.y, cupdinate.size, cupdinate.r, cupdinate.g, cupdinate.b, gameEngine);
  }

  else {
    cupcake_show(cupdinate.x, cupdinate.y, cupdinate.size, cupdinate.r, cupdinate.g, cupdinate.b, gameEngine);
  }
}

gameEngine.startMainLoop(mainLoop, {});
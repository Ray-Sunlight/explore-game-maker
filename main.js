//cupcake function
"use strict";
const gameEngine = new GameEngine();

function cupcake_show(x, y, gameEngine) {
  let position =[];

  for (let i=0; i<15; i+=1) {
    //the y
    for (let j=0; j<15; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<15; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, 170, 70, 210, 255);
}

function cupcake_delete(x, y, gameEngine) {
  let position =[];

  for (let i=0; i<15; i+=1) {
    //the y
    for (let j=0; j<15; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<15; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, 170, 70, 210, 80);
}

let cupdinate = {
  x:25,
  y:25
}

function rancake() {
  let ranx = Math.floor(Math.random() * 860);
  let rany = Math.floor(Math.random() * 478);
  return [ranx, rany];
}

function mainLoop(data) {
  if (gameEngine.isKeyHeld(" ")) {
    cupcake_delete(cupdinate.x, cupdinate.y, gameEngine)
    let new1 = rancake();
    cupdinate.x = new1[0];
    cupdinate.y = new1[1];
    cupcake_show(cupdinate.x, cupdinate.y, gameEngine);
  }

  else {
      cupcake_show(cupdinate.x, cupdinate.y, gameEngine);
  }
}

gameEngine.startMainLoop(mainLoop, {});
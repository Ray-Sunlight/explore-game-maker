//cupcake function
"use strict";
const gameEngine = new GameEngine();

function cupcake_show(x, y, gameEngine) {
  let position =[];

  for (let i=0; i<10; i+=1) {
    //the y
    for (let j=0; j<10; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<10; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, 170, 70, 210, 255);
}

function cupcake_delete(x, y, gameEngine) {
  let position =[];

  for (let i=0; i<10; i+=1) {
    //the y
    for (let j=0; j<10; j+=1) {
      position.push([x+i, y+j]);
      position.push([x-i, y+j]);
    }

    for (let j=0; j<10; j+=1) {
      position.push([x+i, y-j]);
      position.push([x-i, y-j]);
    }
  }

  gameEngine.fillPixels(position, 0, 0, 0, 0);
}

let cupdinate = {
  x:25,
  y:25
}

function mainLoop(data) {
  cupcake_show(cupdinate.x, cupdinate.y, gameEngine);

}

gameEngine.startMainLoop(mainLoop, {});
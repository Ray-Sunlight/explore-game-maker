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
  gameEngine.fillPixels(position, 170, 70, 210 , 255);
}

function mainLoop(data) {
  gameEngine.clear();
  cupcake_show(100, 100, gameEngine);
  
}

gameEngine.startMainLoop(mainLoop, {});
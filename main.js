"use strict";

// initializing the game engine
const gameEngine = new GameEngine();

/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */
function mainLoop(data) {
  gameEngine.fillPixels([[100,100], [100,101], [100,102], [103,104], [100,105], [100,106], [101,102], [103,104]], 255, 0, 0 , 255);
  let num = 100;
  while (num<300){
    gameEngine.fillPixels([num,300]);
    num+=1;
  }
}

gameEngine.startMainLoop(mainLoop, {});

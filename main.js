"use strict";

// initializing the game engine
const gameEngine = new GameEngine();

/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */
function mainLoop(data) {
  let array=[];
  mousex = gameEngine.getMouseX();
  for (let i=1; i<200; ){
    array.push(mousex+i);
  }


  gameEngine.fillPixels([[10,0], [10, 1], [10, 2], [10,3], [10, 4], [10, 5]], 255, 0, 0 , 255);

}

gameEngine.startMainLoop(mainLoop, {});

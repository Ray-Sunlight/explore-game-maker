"use strict";

// initializing the game engine
const gameEngine = new GameEngine();

/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */
function mainLoop(data) {

  for (let i=1; i<200; i+=1){
    for (let j=1; j<200; j+=1){
      gameEngine.fillPixels([[i,j]], 255, 0, 0 , 255);
    }
  }
  gameEngine.playSound("dingDing");
}

gameEngine.startMainLoop(mainLoop, {});
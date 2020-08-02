"use strict";

// initializing the game engine
const gameEngine = new GameEngine();

/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */
function mainLoop(data) {
  gameEngine.fillPixels([[0,0], [0, 1]], 255, 0, 0 , 255);
}

gameEngine.startMainLoop(mainLoop, {});

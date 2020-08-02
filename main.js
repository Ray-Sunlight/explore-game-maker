"use strict";

// initializing the game engine
const gameEngine = new GameEngine();

/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */
function mainLoop(data) {
  let array1=[];
  let mousex = getMouseX();
  for (let i=1; i<200; i+=1){
    array1.push(mousex+i);
  }

  let array2=[];
  let mousey = getMouseY();
  for (let j=1; j<200; i+=1){
    array2.push(mousey+i);
  }
  
  gameEngine.playSound("badBoing");

  gameEngine.fillPixels([[0,1]], 255, 0, 0 , 255);

}

gameEngine.startMainLoop(mainLoop, {});

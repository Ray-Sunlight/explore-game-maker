"use strict";

// initializing the game engine
const gameEngine = new GameEngine();

/**
 * Run a single loop of the game.
 * @param {object}   data    the game state.
 */

function mainLoop(data) {

  let arrx=[];
  for(let i=0; i<500; i+=1)
  {
    arrx.push([i]);
  }
  let arry=[];
  for(let j=10; j<350; j+=1)
  {
    arry.push([i]);
  }
 for(let m=0; m<arrx.length; m++){
   console.log()
 }
 
  for(let a=0; a<arrx.length; a+=1)
  {
    for(let b=0; b<arry.length; b+=1){
      gameEngine.fillPixels([arrx[a],arry[b]],255,0,0,255);
    }
 }
 
 /* let num = 100;
  while (num<500){
    gameEngine.fillPixels([[num,300], [num ,301], [num,302], [num,303], [num ,304], [num,305]], 255, 0, 0, 255);
    num+=1;
  }
  //gameEngine.playSound(chime);
  */

}



/*
let num = 100;
  while (num<500){
    gameEngine.fillPixels([[num,300]], 255, 0, 0, 255);
    num+=1;
  }

let xclicker = getMouseX();
let yclicker = getMouseY();
let xpt = 0;
let ypt = 0;

while (xpt<1000){
  while(ypt<1000){
    if ((xpt - xclicker)^2+(ypt - yclicker)^2 === 2500){
      gameEngine.fillPixels([[xpt, ypt]], 200, 0, 200,  255);
    }
    xpt+=1;
  }
  ypt+=1;
}

*/
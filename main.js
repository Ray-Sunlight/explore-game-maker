"use strict";
/*
elformation: has information for Elephant.
ele_show: show elephant
use function like this:

ele_show(elformation.x, elformation.y, elformation.r, elformation.g, elformation.b, elformation.a, gameEngine);
then change vars in elformation
...

*/
const gameEngine = new GameEngine();

//information for elephant
let elformation = {
  //place
  x:20,
  y:20,
  //color
  r:0,
  g:0,
  b:255,
  a:255
}

//showing the elephant
function ele_show(x, y, r, g, b, a, gameEngine) {
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

  gameEngine.fillPixels(position, r, g, b, a);
}

//un-showing old elephant
//showing the elephant
function ele_delete(x, y, gameEngine) {
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

  gameEngine.fillPixels(position, 0, 0, 0, 0);
}

//movment- checks to where and modify. need to write in a way that will after show new elephant
function moveElephent()
{
  if(gameEngine.isKeyHeld("ArrowRight"))
  {
    elformation.x+=1;
  }

  if(gameEngine.isKeyHeld("ArrowLeft"))
  {
     elformation.x-=1;
  }

  if(gameEngine.isKeyHeld("ArrowUp"))
  {
    elformation.y+=1;
  }

  if(gameEngine.isKeyHeld("ArrowDown"))
  {
    elformation.x-=1;
  }  
}

class Elephant
{
  function colorRed()
  {
    if(this.color.r!==255)
    {
      this.color.r+=5.1;
      this.color.b-=5.1;
    }
  }

  function colorBlue()
  {
    if(this.color.b!==255)
    {
      this.color.r-=5.1;
      this.color.b+=5.1;
    }
  }
}

function mainLoop(data) 
{
  let e1 = Elephant.constructor(10,10,10);
  elephant_show(gameEngine);
}
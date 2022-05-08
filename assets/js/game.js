'use strict';

const MAZE_DATA_URL = './assets/mazes/20x20_maze.json';
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
const CELL_WIDTH_HEIGHT = 22;
const MOVE_INTERVAL = 90;
const GHOST_INTERVAL = 250;

window.onload = async (e) => {
   await main(0);
};

const main = async (level) => {

   const _maze = await maze.getData(MAZE_DATA_URL);
   const _grid = grid.buildGrid(_maze);
   const _cellObjects = cellObjects();
   const _goobi = goobi(10, 5);
   const _ghost1 = ghost(10,15)
   const _ghost2 = ghost(12,15)
   const scr = score();

   async function moveGhost1() {
      if (!document.stop) {
         await _ghost1.moveRight(1);
         // await _ghost1.moveDown(1);
         // await npc.walkSouth(300);
         // await npc.walkEast(1500);
         // await npc.walkSouth(1500);
         // await npc.walkWest(2700);
         // await npc.walkNorth(400);
         await moveGhost1();
      }
   }

   moveGhost1();

   const goobiEncounterDot = (e) => {
      const eventArgs = e.detail;
      // qq(eventArgs);
      const dot = eventArgs.cellObject;
      _cellObjects.lessDot(dot);
      scr.scoreDot();
      if (_cellObjects.isEmpty()) {
         waitFor(1000).then(alert('YOU WON!!!!!!!!!!!!!'))
         // main(1);
      }
   }

   const goobiEncountersPellet = (e) => {
      const eventArgs = e.detail;
      // qq(evetArgs);
      const pellet = eventArgs.cellObject;
      _cellObjects.lessPellet(pellet);
      scr.scorePellet();
      if (_cellObjects.isEmpty()) {
         waitFor(1000).then(alert('YOU WON!!!!!!!!!!!!!'))
         // alert('YOU WON!!!!!!!!!!!!!')
         // main(1);
      }
      superPower();
   }

   Array.prototype.forEach.call(_cellObjects.dots, element => {
      element.addEventListener('onDot', goobiEncounterDot);
   });

   Array.prototype.forEach.call(_cellObjects.pellets, element => {
      element.addEventListener('onPellet', goobiEncountersPellet);
   });


}




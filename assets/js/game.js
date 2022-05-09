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
   const _ghostA = ghost('A', 10, 14)
   const _ghost2 = ghost('B', 9, 13)
   const _ghost3 = ghost('C', 10, 13)
   const _ghost4 = ghost('D', 11, 13)
   const _score = score();

   const moveGhostA = async () => {
      if (!document.stop) {
         await _ghostA.moveUp(1);
         await _ghostA.moveRight(9);
         await _ghostA.moveDown(2);
         await _ghostA.moveLeft(6);
         await _ghostA.moveUp(6);
         await _ghostA.moveRight(4);
         await _ghostA.moveDown(4);
         await _ghostA.moveRight(2);
         await _ghostA.moveDown(4);
         await _ghostA.moveLeft(4);
         await _ghostA.moveDown(6);
         await _ghostA.moveLeft(6);
         await _ghostA.moveDown(4);
         await _ghostA.moveLeft(8);
         await _ghostA.moveUp(2);
         await _ghostA.moveRight(8);
         await _ghostA.moveUp(6);
         await _ghostA.moveLeft(4);
         await _ghostA.moveUp(2);
         await _ghostA.moveLeft(4);
         await _ghostA.moveUp(2);
         await _ghostA.moveRight(6);
         await _ghostA.moveUp(2);
         await _ghostA.moveRight(3);
         await _ghostA.moveDown(1);
         await moveGhostA();
      }
   }

   moveGhostA();

   const goobiEncounterDot = (e) => {
      const eventArgs = e.detail;
      // qq(eventArgs);
      const dot = eventArgs.cellObject;
      _cellObjects.lessDot(dot);
      _score.scoreDot();
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
      _score.scorePellet();
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
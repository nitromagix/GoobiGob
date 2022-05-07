'use strict';

const MAZE_DATA_URL = './assets/mazes/20x20_maze.json';
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
const CELL_WIDTH_HEIGHT = 22;
const MOVE_INTERVAL = 90;

window.onload = async (e) => {
   await main(0);
};

const main = async (level) => {

   const mze = await maze.getData(MAZE_DATA_URL);
   const grd = grid.buildGrid(mze);
   const cob = cellObjects();
   const goo = goobi(11, 5);
   const scr = score();

   Array.prototype.forEach.call(cob.dots, element => {
      element.addEventListener('onDot', function (e) {
         const eventArgs = e.detail;
         // qq(eventArgs);
         const dot = eventArgs.cellObject;
         cob.lessDot(dot);
         scr.scoreDot();
         if (cob.isEmpty()) {
            waitFor(1000).then(alert('YOU WON!!!!!!!!!!!!!'))
            // main(1);
         }
      });
   });

   Array.prototype.forEach.call(cob.pellets, element => {
      element.addEventListener('onPellet', function (e) {
         const eventArgs = e.detail;
         // qq(evetArgs);
         const pellet = eventArgs.cellObject;
         cob.lessPellet(pellet);
         scr.scorePellet();
         if (cob.isEmpty()) {
            waitFor(1000).then(alert('YOU WON!!!!!!!!!!!!!'))
            // alert('YOU WON!!!!!!!!!!!!!')
            // main(1);
         }
         superPower();
      });
   });
}
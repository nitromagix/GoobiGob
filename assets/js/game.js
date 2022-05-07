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
   const m = maze, g = grid;
   const mze = await m.getData(MAZE_DATA_URL);
   const grd = g.buildGrid(mze);
   const mob = cellObjects();
   const goo = goobi(11, 5);
   const scr = score();

   Array.prototype.forEach.call(mob.dots, element => {
      element.addEventListener('onDot', function (e) {
         scr.scoreDot();
         mob.lessDot();
         if (mob.isEmpty()){
            alert('YOU WON!!!!!!!!!!!!!')
            // main(1);
         }
      });
   });

   Array.prototype.forEach.call(mob.pellets, element => {
      element.addEventListener('onPellet', function (e) {
         scr.scorePellet();
         mob.lessPellet();
         if (mob.isEmpty()){
            alert('YOU WON!!!!!!!!!!!!!')
            // main(1);
         }
         superPower();
      });
   });
}




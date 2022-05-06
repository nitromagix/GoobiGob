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
   const bob = boardObjects();
   const goo = goobi(11, 5);
   const scr = score();

   Array.prototype.forEach.call(bob.dots, element => {
      element.addEventListener('dotEaten', function (e) {
         scr.scoreDot();
         bob.lessDot();
         if (bob.isEmpty()){
            alert('YOU WON!!!!!!!!!!!!!')
            // main(1);
         }
      });
   });

   Array.prototype.forEach.call(bob.pellets, element => {
      element.addEventListener('pelletEaten', function (e) {
         scr.scorePellet();
         bob.lessPellet();
         if (bob.isEmpty()){
            alert('YOU WON!!!!!!!!!!!!!')
            // main(1);
         }
         superPower();
      });
   });
}




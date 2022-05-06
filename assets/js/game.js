'use strict';

const MAZE_DATA_URL = './assets/mazes/20x20_maze.json';
const GRID_WIDTH = 20;
const GRID_HEIGHT = 20;
const CELL_WIDTH_HEIGHT = 22;
const MOVE_INTERVAL = 100;

window.onload = async (e) => {
   await main();
};

const main = async () => {

   const mze = await maze.getData(MAZE_DATA_URL);
   const grd = grid.buildGrid(mze);
   const goo = goobi(11, 5);
   const scr = score();

   const dots = document.getElementsByClassName('dot');
   Array.prototype.forEach.call(dots, element => {
      element.addEventListener('dotEaten', function (e) {
         scr.scoreDot();
      });
   });

   const pellets = document.getElementsByClassName('pellet');
   Array.prototype.forEach.call(pellets, element => {
      element.addEventListener('pelletEaten', function (e) {
         superPower();
      });
   });
}



'use strict';
const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;
const CELL_WIDTH_HEIGHT = 20;
const MOVE_INTERVAL = 100;


window.onload = async (e) => {
   await main();

};

const main = async () => {
   let grd = grid.buildGrid();
   const goo = goobi(10, 10);
   mazeData();

   console.log(typeof configData);
}

const mazeData = () => {
   fetch('./assets/mazes/defaultMaze.json')
      .then(response => {
         return response.json();
      })
      .then(jsondata => console.log(jsondata));
}
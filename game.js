'use strict';

const MAZE_DATA_URL = './assets/mazes/defaultMaze.json';
const GRID_WIDTH = 10;
const GRID_HEIGHT = 10;
const CELL_WIDTH_HEIGHT = 20;
const MOVE_INTERVAL = 100;


window.onload = async (e) => {
   await main();

};

const main = async () => {

   const mze = await maze.getData(MAZE_DATA_URL);
   const grd = grid.buildGrid(mze);
   const goo = goobi(6, 5);
}

// const mazeData = async () => {
//    const fetchMaze = await fetch('./assets/mazes/defaultMaze.json');
//    const mazeJson = await fetchMaze.json();
//    return mazeJson;
// }
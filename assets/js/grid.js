'use strict';


const grid = {
   
   buildGrid: (mazeData) => {

      console.log(mazeData);

      // const wh = `${CELL_WIDTH_HEIGHT}px`
      const g = document.getElementById('grid');
      for (let y = 0; y <= GRID_HEIGHT; y++) {
         const y_Index = GRID_HEIGHT - y;    //   give rows a y-index of (MAZE_HEIGHT - y) ... top row has (MAZE_HEIGHT - y), bottom row has index of (0) ... bottom left corner is [0,0]
         const row = document.createElement('div');
         row.classList.add('row');
         g.append(row);
         for (let x = 0; x <= GRID_WIDTH; x++) {
            const x_index = x;
            const cell = document.createElement('div');
            cell.id = `c${x_index}_${y_Index}`;
            cell.classList.add('cell');
            // cell.style.width = wh;     //   change in CSS
            // cell.style.height = wh;    //   change in CSS
            cell.setAttribute('position', `[${x_index},${y_Index}]`);
            cell.textContent = '';
            row.append(cell);
         }
      };
      return g;
   }
}
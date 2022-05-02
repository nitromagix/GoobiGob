'use strict';


const maze = {
   
   initialize: () => {
      function changeBackgroundColor(e) {
         e.target.style.background = e.target.style.background === 'lightgrey' ? 'black' : 'lightgrey'
      }

      const wh = `${CELL_WIDTH_HEIGHT}px`
      const m = document.getElementById('maze');
      for (let y = 0; y <= MAZE_HEIGHT; y++) {
         const y_Index = MAZE_HEIGHT - y; // give top row of cells an index of MAZE_HEIGHT - y instead of 0 ... bottom row has index of 0 ... bottom left corner is [0,0]
         const row = document.createElement('div');
         row.classList.add('row')
         m.append(row);
         for (let x = 0; x <= MAZE_WIDTH; x++) {
            const x_index = x;
            const cell = document.createElement('div');
            cell.id = `c${x_index}-${y_Index}`
            cell.style.width = wh;
            cell.style.height = wh;
            cell.setAttribute('position', `[${x_index},${y_Index}]`)
            cell.textContent = '';
            cell.classList.add('cell');
            // cell.onclick = changeBackgroundColor;
            row.append(cell);
         }
      }
      return m;
   }
}
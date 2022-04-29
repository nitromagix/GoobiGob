'use strict';


const maze = {
   initialize: () => {
      function changeBackgroundColor(e) {
         e.target.style.background = e.target.style.background === 'lightgrey' ? 'black' : 'lightgrey'
      }

      const wh = `${CELL_WIDTH_HEIGHT}px`
      const m = document.getElementById('maze');
      for (let y = 0; y <= 15; y++) {
         const row = document.createElement('div');
         row.classList.add('row')
         m.append(row);
         for (let x = 0; x <= 20; x++) {
            const cell = document.createElement('div');
            cell.id = `c${x}-${y}`
            cell.style.width = wh;  
            cell.style.height = wh;  
            cell.setAttribute('position', `[${x},${y}]`)
            cell.textContent = '';
            cell.classList.add('cell');
            // cell.onclick = changeBackgroundColor;
            row.append(cell);
         }
      }
      return m;
   }
}
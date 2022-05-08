'use strict';

function ghost(x, y) {
   const wh = `${CELL_WIDTH_HEIGHT}px`;
   let element = createSizedImage('assets/images/ghostStatic.png', wh, wh)
   element.classList.add('ghost');

   let direction = null;

   function moveGhost() {
      if (direction === 'right') {
         x = x === GRID_WIDTH ? 0 : x + 1;
      }
      if (direction === 'up') {
         y = y === GRID_HEIGHT ? GRID_HEIGHT : y + 1;
      }
      if (direction === 'left') {
         x = x === 0 ? GRID_WIDTH : x - 1;
      }
      if (direction === 'down') {
         y = y === 0 ? 0 : y - 1;
      }

      const newCell = document.getElementById(`c${x}_${y}`);
      newCell.appendChild(element);
   }

   setInterval(moveGhost, GHOST_INTERVAL)

   async function right(time) {
      direction = 'right'
      // element.src = `./assets/images/ghostStatic.png`
      await sleep(time);
      stop();
   }

   async function up(time) {
      direction = 'up'
      // element.src = `./assets/images/ghostStatic.png`
      await sleep(time);
      stop();
   }

   async function left(time) {
      direction = 'left'
      // element.src = `./assets/images/ghostStatic.png`
      await sleep(time);
      stop();
   }

   async function down(time) {
      direction = 'down'
      // element.src = `./assets/images/ghostStatic.png`
      await sleep(time);
      stop();
   }

   function stop() {
      direction = null
      // element.src = `./assets/images/ghostStatic.png`
   }

   function sleep(time) {
      return new Promise(resolve => {
         setTimeout(resolve, time)
      })
   }

   return {
      element: element,
      moveLeft: left,
      moveUp: up,
      moveRight: right,
      moveDown: down,
      stop: stop
   }
}
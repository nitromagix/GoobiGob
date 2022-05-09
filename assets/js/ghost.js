'use strict';

function ghost(id, x, y) {
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

   moveGhost();

   // setInterval(moveGhost, GHOST_INTERVAL)

   async function right(numberOfTimes) {
      qq('right')
      direction = 'right';
      await sleepThenmove(numberOfTimes);
      // element.src = `./assets/images/ghostStatic.png`;
      stop();
   }

   async function up(numberOfTimes) {
      direction = 'up';
      await sleepThenmove(numberOfTimes);
      // element.src = `./assets/images/ghostStatic.png`;
      stop();
   }

   async function left(numberOfTimes) {
      direction = 'left';
      await sleepThenmove(numberOfTimes);
      // element.src = `./assets/images/ghostStatic.png`;
      stop();
   }

   async function down(numberOfTimes) {
      direction = 'down'
      await sleepThenmove(numberOfTimes);
      // element.src = `./assets/images/ghostStatic.png`
      stop();
   }

   const sleepThenmove = async (numberOfTimes) => {
      for (let i = 0; i < numberOfTimes; i++) {
         await sleep(GHOST_INTERVAL);
         moveGhost();
      }
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
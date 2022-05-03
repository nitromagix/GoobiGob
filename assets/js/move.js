'use strict';

const TIMEOUT = 200

const move = (element) => {
   element.style.position = 'relative'

   // function moveToCoordinates(left, bottom) {
   //    element.style.left = left + 'px'
   //    element.style.bottom = bottom + 'px'
   // }

   async function moveWithArrowKeys(x_index, y_index, callback) {
      let direction = null;
      let x = x_index;
      let y = y_index;

      function moveCharacter() {
         if (direction === 'right') {
            x = x === MAZE_WIDTH ? MAZE_WIDTH : x + 1;
         }
         if (direction === 'up') {
            y = y === MAZE_HEIGHT ? MAZE_HEIGHT : y + 1;
         }
         if (direction === 'left') {
            x = x === 0 ? 0 : x - 1;
         }
         if (direction === 'down') {
            y = y === 0 ? 0 : y - 1;
         }

         if (direction !== null) {
            const newCell = document.getElementById(`c${x}-${y}`);
            newCell.appendChild(element)
         }
      }

      setInterval(moveCharacter, MOVE_INTERVAL)

      document.addEventListener('keydown', function (e) {
         if (e.repeat) return;

         if (e.key === 'ArrowLeft') {
            direction = 'left'
         }
         if (e.key === 'ArrowUp') {
            direction = 'up'
         }
         if (e.key === 'ArrowRight') {
            direction = 'right'
         }
         if (e.key === 'ArrowDown') {
            direction = 'down'
         }
         callback(direction)
      })

      document.addEventListener('keyup', function (e) {
         direction = null
         callback(direction)
      })
   }

   const wait = async (milliseconds) => {
      await new Promise(resolve => setTimeout(resolve, 7));
   }

   return {
      // to: moveToCoordinates,
      withArrowKeys: moveWithArrowKeys
   }
}
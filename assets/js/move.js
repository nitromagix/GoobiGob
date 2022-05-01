'use strict';

function move(element) {
   element.style.position = 'relative'

   // function moveToCoordinates(left, bottom) {
   //    element.style.left = left + 'px'
   //    element.style.bottom = bottom + 'px'
   // }

   function moveWithArrowKeys(x_index, y_index, callback) {
      let direction = null;
      let x = x_index;
      let y = y_index;

      element.style.left = '0px';
      element.style.top = '0px';

      function moveCharacter() {
         if (direction === 'right') {
            x = x === 20 ? 20 : x + 1;
         }
         if (direction === 'up') {
            y = y === 0 ? 0 : y - 1;
         }
         if (direction === 'left') {
            x = x === 0 ? 0 : x - 1;
         }
         if (direction === 'down') {
            y = y === 15 ? 15 : y + 1;
         }

         const newCell = document.getElementById(`c${x}-${y}`);
         newCell.appendChild(element)
      }

      setInterval(moveCharacter, 150)

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

   return {
      // to: moveToCoordinates,
      withArrowKeys: moveWithArrowKeys
   }
}





// quick backup
// function move(element) {
//    element.style.position = 'fixed'

//    function moveToCoordinates(left, bottom) {
//        element.style.left = left + 'px'
//        element.style.bottom = bottom + 'px'
//    }

//    function moveWithArrowKeys(left, bottom, callback){
//        let direction = null;
//        let x = left;
//        let y = bottom;

//        element.style.left = x + 'px'
//        element.style.bottom = y + 'px'

//        function moveCharacter(){ 
//            if(direction === 'left'){
//                x-=1
//            }
//            if(direction === 'up'){
//                y+=1
//            }
//            if(direction === 'right'){
//                x+=1
//            }
//            if(direction === 'down'){
//                y-=1
//            }
//            element.style.left = x + 'px'
//            element.style.bottom = y + 'px'
//        }

//        setInterval(moveCharacter, 1)

//        document.addEventListener('keydown', function(e){
//            if(e.repeat) return;

//            if(e.key === 'ArrowLeft'){
//                direction = 'left'
//            }
//            if(e.key === 'ArrowUp'){
//                direction = 'up'
//            }
//            if(e.key === 'ArrowRight'){
//                direction = 'right'
//            }
//            if(e.key === 'ArrowDown'){
//                direction = 'down'
//            }
//            callback(direction)
//        })

//        document.addEventListener('keyup', function(e){
//            direction = null
//            callback(direction)
//        })
//    }

//    return {
//        to: moveToCoordinates,
//        withArrowKeys: moveWithArrowKeys
//    }
// }
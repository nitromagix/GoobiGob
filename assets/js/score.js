'use strict';

const score = () => {

   let count = 0;

   const scoreDot = () => {
      console.log('score.scoreDot() -> count = ' + count)
      count += 100;
      const s = document.getElementById('score');
      s.textContent = count;
   }

   return {
      addDot : scoreDot
   }

}
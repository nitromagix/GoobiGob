'use strict';

const score = () => {

   let count = 0;

   const dot = () => {
      // console.log('score.scoreDot() -> count = ' + count)
      count += 100;
      const s = document.getElementById('score');
      s.textContent = count;
   }

   return {
      scoreDot : dot
   }

}
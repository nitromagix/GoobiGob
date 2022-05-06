'use strict';

const score = () => {

   let count = 0;

   const dot = () => {
      count += 123;
      const s = document.getElementById('score');
      s.textContent = count;
   }

   const pellet = () => {
      count += 3169;
      const s = document.getElementById('score');
      s.textContent = count;
   }

   return {
      scoreDot: dot,
      scorePellet: pellet
   }

}
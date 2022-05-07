'use strict';

const cellObjects = () => {

   const dotArray = document.getElementsByClassName('dot');
   const pelletArray = document.getElementsByClassName('pellet');

   let dotLength = dotArray.length;
   let pelletLength = pelletArray.length;

   const oneLessDot = () => {
      dotLength -= 1;
   }

   const oneLessPellet = () => {
      pelletLength -= 1;
   }

   const checkIfEmpty = () => {
      qq(`dots: ${dotLength}; pellets: ${pelletLength}`)
      return dotLength === 0 && pelletLength === 0;
   }

   return {
      dots: dotArray,
      numberOfDots: dotLength,
      numberOfPellets: pelletLength,
      pellets: pelletArray,
      lessDot: oneLessDot,
      lessPellet: oneLessPellet,
      isEmpty: checkIfEmpty
   }

}
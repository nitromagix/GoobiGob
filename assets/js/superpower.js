'use strict';

const superPower = async () => {
   const walls = document.getElementsByClassName('wall');
   const int = setInterval(
      function () {
         Array.prototype.forEach.call(walls, element => {
            element.style.backgroundColor = element.style.backgroundColor === 'navy' ? 'aquamarine' : 'navy';
         });
      }, 250);
   await waitFor(5678);
   Array.prototype.forEach.call(walls, element => {
      element.style.backgroundColor = 'navy';
   });
   clearInterval(int);
}
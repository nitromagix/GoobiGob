'use strict';

const superPower = async () => {
   const walls = document.getElementsByClassName('wall');
   Array.prototype.forEach.call(walls, element => {
      element.style.backgroundColor = 'aquamarine';
   });
   const intv = setInterval(
      function () {
         Array.prototype.forEach.call(walls, element => {
            element.style.backgroundColor = element.style.backgroundColor === 'navy' ? 'aquamarine' : 'navy';
         });
      }, 250);
   const ghosts = document.getElementsByClassName('ghost');
   Array.prototype.forEach.call(ghosts, element => {
      // element.classList.remove('ghost');
      // element.classList.add('weakghost');
      element.src = './assets/images/ghost_.gif';
   });
   await waitFor(5678);
   Array.prototype.forEach.call(walls, element => {
      element.style.backgroundColor = 'navy';
   });
   Array.prototype.forEach.call(ghosts, element => {
      // element.classList.remove('weakghost');
      // element.classList.add('ghost');
      element.src = './assets/images/ghostStatic.png';
   });
   clearInterval(intv);
}
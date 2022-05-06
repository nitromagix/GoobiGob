
const superPower = async () => {
   const walls = document.getElementsByClassName('wall');
   const x = setInterval(
      function () {
         Array.prototype.forEach.call(walls, element => {
            element.style.backgroundColor = element.style.backgroundColor === 'mediumblue' ? 'aquamarine' : 'mediumblue';
         });
      }, 250);
   await waitFor(6000);
   Array.prototype.forEach.call(walls, element => {
      element.style.backgroundColor = 'mediumblue';
   });
   clearInterval(x);
}
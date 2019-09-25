const scrollDown = document.getElementsByClassName("scroll-down");
const scrollUp = document.getElementsByClassName("scroll-up");

let viewportHeight = window.innerHeight;
let bodyHeight = document.body.scrollHeight;

window.onscroll = function() {scrollFunction()};

/* 
    Makes scroll indicator shift between visable and hidden
*/

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) { scrollDown[0].classList.add("scroll-down-hidden");} 
  if (document.documentElement.scrollTop < 50) { scrollDown[0].classList.remove("scroll-down-hidden");} 
  if (document.documentElement.scrollTop < bodyHeight - viewportHeight/*  - 100 */) { scrollUp[0].classList.add("scroll-up-hidden");} 
  else { scrollUp[0].classList.remove("scroll-up-hidden");}
};
let whiteStripes = document.querySelectorAll(".work-white-stripes-seven");
let x45001 = document.querySelectorAll(".work-x45-001-asteroids");
let multiplier = 0.3;

function parallax() {
    
  whiteStripes.forEach(function(img) {
    if (isElementInViewport(img)) {
      let distance = elementDistanceFromBottomOfViewport(img);
      if (0 < distance && distance < (window.innerHeight + 400)) { /* Prevent the moving pic to freeze at the left of the screen */
        img.style.backgroundPositionX = multiplier * distance + "px";
        img.style.transform = "translateX(-" + multiplier * distance + "px)";
      }
    }
  });
  x45001.forEach(function(img) {
    if (isElementInViewport(img)) {
      let distance = elementDistanceFromBottomOfViewport(img);
      img.style.backgroundPositionY = multiplier * distance + "px";
      img.style.transform = "translateY(-" + multiplier * distance + "px)";
    }
  });
}
  
function isElementInViewport (el) {
  let rect = el.getBoundingClientRect();

  return (
    /* rect.top >= 0 && */
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) */
  );
}
  
if (window.addEventListener) {
  addEventListener('DOMContentLoaded', parallax, false); 
  addEventListener('load', parallax, false);
  addEventListener('scroll', parallax, false);
}
  
function elementDistanceFromBottomOfViewport(el) {
  let rect = el.getBoundingClientRect();

  return window.innerHeight - rect.top;
}
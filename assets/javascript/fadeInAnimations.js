let aboutText = document.querySelectorAll(".hello");
let whiteTitles = document.querySelectorAll('.ml11 .letters');
let x45Titles = document.querySelectorAll('.ml10 .letters');
let crtTitles = document.querySelectorAll('.ml12 .letters');
let workImages = document.querySelectorAll(".work-img");
let workDemo = document.querySelectorAll('.work-demo');
let balls = document.querySelectorAll('.ball');
let buttons = document.querySelectorAll('.turn-on-off');

let counter = [0, 0, 0];

whiteTitles.forEach(function(title){
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter-wrapper'><span class='letter'>$&</span></span>");
});
x45Titles.forEach(function(title){
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter-wrapper'><span class='letter'>$&</span></span>");
});
crtTitles.forEach(function(title){
    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter-wrapper'><span class='letter'>$&</span></span>");
});


function checkForVisibility() {

    /* Titles */
    whiteTitles.forEach(function(title) {
        if (isElementInFullViewport(title) && counter[0] == 0 ){
            anime({
            targets: '.ml11 .letter',
            rotateY: [-90, 0],
            translateX: [-120, 0],
            duration: 600,
            easing: 'easeOutCubic',
            delay: (el, i) => 40 * i
            });
            counter[0] ++;
        }
    });

    x45Titles.forEach(function(title) {
        if (isElementInFullViewport(title) && counter[1] == 0 ){
            anime({
            targets: '.ml10 .letter',
            rotateY: [-90, 0],
            translateX: [-120, 0],
            duration: 600,
            easing: 'easeOutCubic',
            delay: (el, i) => 40 * i
            });
            counter[1] ++;
        }
    });

    crtTitles.forEach(function(title) {
        if (isElementInFullViewport(title) && counter[2] == 0 ){
            anime({
            targets: '.ml12 .letter',
            rotateY: [-90, 0],
            translateX: [-120, 0],
            duration: 600,
            easing: 'easeOutCubic',
            delay: (el, i) => 60 * i
            });
            counter[2] ++;
        }
    });

    /* Presentation text */
    aboutText.forEach(function(text) {
        if (isElementInFullViewport(text)) {
            text.classList.add('about-text-show');
        }
    });

    /* Work images */
    workImages.forEach(function(image) { 
        if (isElementInFullViewport(image)) {
          image.style.opacity = '1';
        }
    });

    workDemo.forEach(function(demo) { 
        if (isElementInFullViewport(demo)) {
          demo.style.opacity = '1';
        }
    });

    /* Pendulum Animation */
    balls.forEach(function(ball) { 
        if (isElementInFullViewport(ball)) {
          ball.style.opacity = '1';
        }
    });

    /* CRT button */
    buttons.forEach(function(button) { 
        if (isElementInFullViewport(button)) {
          button.style.opacity = '1';
        }
    });
};

function isElementInFullViewport (el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) // True or false
    );
};
  
if (window.addEventListener) {
    addEventListener('DOMContentLoaded', checkForVisibility, false); 
    addEventListener('load', checkForVisibility, false);
    addEventListener('scroll', checkForVisibility);
}

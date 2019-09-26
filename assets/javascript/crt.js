/* 
  CRT Animation and button behavior
*/

let onOffBtn = document.getElementById('crt-on');
let television = document.getElementsByClassName('screen');

function crtBtn(status) {
  this.btnStatus = status;
}

let onOff = new crtBtn(0);

crtBtn.prototype.checkStatus = function(){
  if (this.btnStatus == 0) {
      this.btnStatus = 1;
      return this.btnStatus;
  }
  else {
      this.btnStatus = 0;
      return this.btnStatus;
  }
}

/* Creates "Ants War" screen effect */
function antsWar() {
  anime({
    targets: '.noise',
    translateX: function() {
      return anime.random(0, 200);
    },
    translateY: function() {
        return anime.random(0, 200);
    },
    easing: 'linear',
    duration: 10,
    complete: antsWar
  });
}

onOffBtn.addEventListener('click', crtOnOrOff);

/* Changes button from "on" to "off" and plays the correct animation */
function crtOnOrOff() {

  antsWar();

  // When pressed on
  if (onOff.checkStatus() == 1) { 
    onOffBtn.style.zIndex = '-10';
    onOffBtn.style.color = "black";
    television[0].classList.add('turning-on');
    television[0].style.opacity = '1';
    easterEggBtn.style.top = "10px";
    setTimeout(function(){
      onOffBtn.innerHTML = "Turn Off";
      onOffBtn.style.zIndex = '0';
      onOffBtn.style.color = 'white';
      television[0].classList.remove('turning-on');
    }, 4000);
  }
  // When pressed off
  else { 
    onOffBtn.style.zIndex = '-10';
    onOffBtn.style.color = 'black';
    easterEggBtn.style.top = "-100px";
    anime({
      targets: '.screen',
      scaleY: {
      value: -0.005,
      duration: 800,
      easing: 'easeInOutExpo'
      },
      scaleX: {
        value: -0.003,
        duration: 600,
        delay: 800,
        easing: 'easeInExpo'
      },
      borderRadius: {
        value: ['6%', '50%'],
        delay: 500
      },
      opacity: {
        value: [1, 0],
        duration: 3000,
        easing: 'linear'
      },
      complete: () => {
        onOffBtn.innerHTML = "Turn on";
        television[0].style.cssText = "";
        onOffBtn.style.zIndex = '0';
        onOffBtn.style.color = 'white';
        television[0].classList.remove('turning-on');
        television[0].style.opacity = '0';
      }
    });
  }
}
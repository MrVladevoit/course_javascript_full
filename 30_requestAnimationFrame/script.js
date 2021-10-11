'use strict';

const btn = document.querySelector('.btn'),
      element = document.querySelector('.box');

let pos = 0;

// RequestAnimationFrame
function myAnimation() {
    pos++;
    element.style.top = pos + 'px';
    element.style.left = pos + 'px';

    if(pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// отменить анимацию
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
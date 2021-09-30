window.addEventListener("DOMContentLoaded", () => {
    const tabs  = require('./modules/tabs'),
          modal  = require('./modules/modal'),
          timer  = require('./modules/timer'),
          cards  = require('./modules/calc'),
          calc  = require('./modules/cards'),
          slider  = require('./modules/slider'),
          forms  = require('./modules/forms');
    
    tabs();
    modal();
    timer();
    cards();
    calc();
    slider();
    forms();
});
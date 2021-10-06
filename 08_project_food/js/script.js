require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import {openModal} from './modules/modal';
import timer from './modules/timer';
import cards from './modules/calc';
import calc from './modules/cards';
import slider from './modules/slider';
import forms from './modules/forms';

window.addEventListener("DOMContentLoaded", () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-01-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slider',
        wrapper: '.offer__slider-wrapper',
        totalCounter: '#total',
        currentCounter: '#current',
        inner: '.offer__slider-inner'
    });
});
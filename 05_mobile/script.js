"use strict";

// touchstart - коснулся экрана 
// touchmove - движет, что-то на экрана
// touchend - отжал палец с экрана 
// touchenter - когда тач зашел в зону элемента
// touchleave - когда тач вышел из зоны элемента
// touchcancel - возникает когда точка соприкосновения больше не регистрируется на поверхности


window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (e) => {
        e.preventDefault();

        console.log("Start");
        console.log(e.targetTouches);
    });

    box.addEventListener("touchmove", (e) => {
        e.preventDefault();

        console.log("Move");
        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener("touchend", (e) => {
        e.preventDefault();

        console.log("End");
    });
});

// touches - выдает список всех пальцев, которые коснулись экрана
// targetTouches - все пальцы, которые взаимодействуют с этим элементом
// chengedTouches - список пальцев, которые учавствуют в этом событии


 
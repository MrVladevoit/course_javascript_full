'use strict';

class Rectangle {
    
    // объект
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // методы
    calcArea() {
        return this.height * this.width;
    }
}

const square= new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

// Нужно сделать наследование от другого класса
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width); // вызывает супер конструктор родителя - она всегла должна быть на первом месте !
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());
function myModule() {
    this.hello = function() {
        console.log('Hello');
    };

    this.goodbye = function() {
        console.log('Bye!');
    };
}

module.exports = myModule; // синтаксис common js 
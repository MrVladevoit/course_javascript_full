'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    watch: true,

    devtool: "source-map",

    module: {}
};

// mode 
// dev - режм для разработки, он работает быстрее
// production - сразу с оптимизацией под продакшн.

// entry
// Файл в котором прописываются все зависимости

// output - мы конфигируем тот файл, который получится в итоге. Указываем куда его складывать.

// watch - webpack будет отслеживать файлы и собирать их в реальном времени
// devtool - подключили source map, чтобы хранить информацию об исходниках.
// module - для подключения модулей и плагинов. 
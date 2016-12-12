'use strict';

const sayHiInstance = require('./event_sayHi');
sayHiInstance.emit('event'); // executing event
sayHiInstance.emit('event', 'doron'); // executing event and passing an argument


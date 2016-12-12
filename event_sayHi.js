'use strict';

const EventEmitter = require('events');

class SayHiEvent extends EventEmitter {}

const eventInstance = new SayHiEvent();
eventInstance.on('event', (name = '') => {
    console.log(`hi...${name}`);
});

module.exports = eventInstance;


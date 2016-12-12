'use strict';

const EventEmitter = require('events');
const http = require('http');
class Logger extends EventEmitter {
  constructor({
    protocol = 'http', 
    host='localhost', 
    port=80, 
    path = '/log', 
    method = 'POST',
    threshold = 10
  }) {
    super();
    this.protocol = protocol;
    this.host = host;
    this.port = port;
    this.path = path;
    this.method = method;
    this.options = {
      port: port,
      hostname: host,
      method: this.method 
    }
  }
}

const eventInstance = new Logger();
eventInstance.on('log', (body) => {
  if (this.protocol === 'https') {
    
  } else {

  }
});


module.exports = eventInstance;


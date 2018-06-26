
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        console.log(message);
        this.emit('ms',{id:2,url:'www.yahoo.com'});
    }
}

module.exports = Logger;

//console.log(module);

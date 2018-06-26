
const Logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

const EventEmitter = require('events');
const logger = new Logger();

//logger.fun('message');

//console.log(path.parse(__filename));
/*
fs.readdir('./',function(err,files){
if(err) console.log('Error:',err);
else console.log('Result:',files);
});*/

logger.on('ms', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message from nodejs');
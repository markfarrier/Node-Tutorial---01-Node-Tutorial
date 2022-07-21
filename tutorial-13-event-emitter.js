const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emits the event

// parameters = name of event, callback function
customEmitter.on('response', (name, id) => {
	console.log(`data received ${name} with id:${id}`);
});

// don't need to use all the arguments passed into emit
customEmitter.on('response', () => {
	console.log(`some other logic here `);
});

// strings in first argument need to match
// order matters.  Need to listen to event THEN emit it, otherwise the callback function won't run
// all arguments after the first are arguments passed into the callback function
customEmitter.emit('response', 'john', 34);

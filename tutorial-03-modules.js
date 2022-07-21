// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const {john, peter} = require('./tutorial-04-names');
const names = require('./tutorial-04-names');
const sayHi = require('./tutorial-05-utils');
const data = require('./tutorial-06-alternative-flavor');

require('./tutorial-07-mind-grenade');

// console.log(data);
// console.log(names);
// console.log(sayHi);

// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);

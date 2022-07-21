const { readFileSync, writeFileSync } = require('fs');

// alternatively without destructuring
// const fs = require('fs')
// fs.readFileSync
// fs.writeFileSync

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// will create file if it doesn't exist
// without the flag, it will overwrite contents with the string
// with the flag, it will append the string onto the contents
writeFileSync(
	'./content/result-sync.txt',
	`Here is the result ${first}, ${second}`,
	{ flag: 'a' }
);

console.log('done with this task');
console.log('starting the next one');

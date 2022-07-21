const { createReadStream } = require('fs');

// const stream = createReadStream('./content/big.txt');
// const stream = createReadStream('../content/big.txt', {
const stream = createReadStream('./content/big.txt', {
	highWaterMark: 90000,
	encoding: 'utf8',
});

// does it in chunks
// default chunk size is 64KB
// last buffer - remainder
// highWaterMark - control chunk size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

stream.on('data', (result) => {
	console.log(result);
});

stream.on('error', (err) => console.log(err));

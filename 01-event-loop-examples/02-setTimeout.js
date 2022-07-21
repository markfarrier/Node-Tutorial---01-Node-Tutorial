// started operating system process
console.log('first');
setTimeout(() => {
	console.log('second');
}, 0);
// despite timeout being 0, second will be logged last because setTimeout gets offloaded, and all syncronous code will run first
console.log('third');
// completed and exited operating system process

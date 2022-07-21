// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log('Logging __dirname:');
console.log(__dirname);

console.log('Logging __filename:');
console.log(__filename);

console.log('Logging require:');
console.log(require);

console.log('Logging module:');
console.log(module);

console.log('Logging process');
console.log(process);

console.log('setInterval:');
setInterval(() => {
	console.log('hello world');
}, 1000);

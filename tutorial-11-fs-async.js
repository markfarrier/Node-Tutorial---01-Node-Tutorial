const { readFile, writeFile } = require('fs');

console.log('start');

// if you don't add the utf coding, result will be a buffer
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err);
		return;
	}

	const first = result;
	readFile('./content/second.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err);
			return;
		}
		const second = result;
		writeFile(
			'./content/result-async.txt',
			`Here is the result : ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				// console.log(result);
				console.log('done with this task');
			}
		);
	});
});

// will run second rather than last i.e. before the previous task is done
console.log('starting next task');

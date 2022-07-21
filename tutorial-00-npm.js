// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// name - name must be unique
// npm init -y

// common naming convension
const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
// using method that lowdash provides below
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello people');

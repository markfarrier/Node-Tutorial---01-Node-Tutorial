// OS = Operating System
// os is a built-in module - no need to create yourself as it's already provided

const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freemem: os.freemem(),
};
console.log(currentOS);

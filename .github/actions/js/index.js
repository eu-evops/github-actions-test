const process = require('process');
const child_process = require('child_process');

process.addListener('SIGINT', () => {
  console.log('Hello World from SIGINT');
})

child_process.execSync('sleep 60');

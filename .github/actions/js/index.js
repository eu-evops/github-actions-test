const process = require('process');
const child_process = require('child_process');

process.addListener('SIGINT', () => {
  console.log('Hello World from SIGINT');
})

process.addListener('SIGTERM', () => {
  console.log('Hello World from SIGTERM');
})

process.addListener('SIGKILL', () => {
  console.log('Hello World from SIGKILL');
})

setTimeout((() => { console.log('timeout'); }), 60000);

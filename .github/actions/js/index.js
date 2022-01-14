const process = require('process');
const child_process = require('child_process');

process.addListener('SIGINT', () => {
  console.log('Hello World from SIGINT');
})

process.addListener('SIGTERM', () => {
  console.log('Hello World from SIGTERM');
})


setInterval(() => { console.log('timeout') }, 1000);

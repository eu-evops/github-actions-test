const process = require('process');

process.addListener('SIGINT', () => {
  console.log('Hello World from SIGINT');
})
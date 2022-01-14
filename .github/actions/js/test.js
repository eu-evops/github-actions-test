// spawn-test.js
const { spawn } = require('child_process');

const b = spawn('bash', ['-c', 'trap "echo BASH"; sleep 1111']);
b.on('exit', (code, signal) => {
  console.log('Existed with', code, signal);
})


const one = spawn('sleep', ['101']);
const two = spawn('sleep', ['102'], { detached: true });
two.unref();
process.on('SIGINT', function () {
  console.log('just ignore SIGINT');
});

one.on('SIGINT', () => {
  console.log('SIGINT internal')
})
// spawn-test.js
const { spawn } = require('child_process');

const b = spawn('terraform', ['init'], { cwd: '../../..' });
b.on('message', m => console.log('STDOUT: %s', m));

b.stdout.on('data', m => console.log('STDOUT: %s', m));
b.stderr.on('data', m => console.log('STDERR: %s', m));

b.on('exit', (code, signal) => {
  console.log('Existed with', code, signal);
})


const one = spawn('sleep', ['101']);
const two = spawn('sleep', ['102'], { detached: true });
two.unref();
process.on('SIGINT', function () {
  console.log('just ignore SIGINT');
  b.kill('SIGINT');
  setTimeout(() => {
    process.exit(2)
  }, 10000)
});

one.on('SIGINT', () => {
  console.log('SIGINT internal')
})
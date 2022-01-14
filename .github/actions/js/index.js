const exec = require('@actions/exec')
const core = require('@actions/core')

const process = require('process');
const child_process = require('child_process');

const p = child_process.spawn('bash', ['-c', 'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'])
p.stdout.on('data', m => console.log('STDOUT: %s', m))
p.stderr.on('data', m => console.log('STDERR: %s', m))

p.on('exit', (code, signal) => {
  console.log('EXIT', code, signal)
})

process.on('SIGINT', function () {
  console.log('Handle SIGINT');
  p.kill('SIGINT');
  setTimeout(() => {
    process.exit(2)
  }, 10000)
});

console.log('Node PID', process.pid)
console.log('Child PID', p.pid)

// exec.exec('bash', [
//   '-c',
//   'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'
// ], {

// })

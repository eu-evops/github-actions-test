const exec = require('@actions/exec')
const core = require('@actions/core')

const process = require('process');
const child_process = require('child_process');

const p = child_process.spawn('bash', ['-c', 'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'], { detached: true })
p.stdout.on('data', m => console.log('STDOUT: %s', m))
p.stderr.on('data', m => console.log('STDERR: %s', m))

p.on('exit', (code, signal) => {
  console.log('EXIT', code, signal)
})

p.addListener('message', m => console.log('MESSAGE: %s', m))
p.addListener('exit', (code, signal) => console.log('EXIT', code, signal))
p.addListener('close', code => console.log('CLOSE: %s', code))
p.addListener('error', code => console.log('ERROR: %s', code))
p.addListener('spawn', code => console.log('SPAWN: %s', code))

console.log('Node PID', process.pid)
console.log('Child PID', p.pid)

process.addListener('SIGINT', function () {
  console.log('Hello World from SIGINT');
  p.kill('SIGINT');
})

process.addListener('SIGTERM', function () {
  console.log('Hello World from SIGTERM');
  p.kill('SIGTERM');
})

// exec.exec('bash', [
//   '-c',
//   'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'
// ], {

// })

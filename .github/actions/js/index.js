const exec = require('@actions/exec')
const core = require('@actions/core')

const process = require('process');
const child_process = require('child_process');


const p = child_process.spawn('bash', ['-c', 'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'])
p.stdout.on('data', m => console.log('STDOUT: %s', m))
p.stderr.on('data', m => console.log('STDERR: %s', m))
p.addListener('message', console.log)



process.addListener('SIGINT', () => {
  console.log('Hello World from SIGINT');
  p.kill('SIGINT');
})

process.addListener('SIGTERM', () => {
  console.log('Hello World from SIGTERM');
  p.kill('SIGTERM');
})

// exec.exec('bash', [
//   '-c',
//   'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'
// ], {

// })

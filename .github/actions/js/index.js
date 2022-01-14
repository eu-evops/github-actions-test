const exec = require('@actions/exec')
const core = require('@actions/core')

const process = require('process');
const child_process = require('child_process');

process.addListener('SIGINT', () => {
  console.log('Hello World from SIGINT');
})

process.addListener('SIGTERM', () => {
  console.log('Hello World from SIGTERM');
})

// exec.exec('bash', [
//   '-c',
//   'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'
// ], {

// })

const p = child_process.spawn('trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60', (err, stdout, stderr) => {
  console.log('err', err)
  console.log('stdout', stdout)
  console.log('stderr', stderr)
})
p.on('message', console.log)
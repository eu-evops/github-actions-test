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

exec.exec('bash', [
  '-c',
  'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60'
], {

})

child_process.execSync('bash -c \'trap "echo BASHSIGINT" SIGINT; trap "echo BASHSIGTERM" SIGTERM; echo Hello World from bash; sleep 60\'')
const util = require('util')
const execFile = util.promisify(require('child_process').execFile);


async function execute(command) {
    console.log("Beginning linux command")
    const {stdout, stderr} = await execFile(command);
    console.log('STDOUT', stdout);
    console.log('STDERR', stderr);
    return stdout
}

module.exports = { execute }

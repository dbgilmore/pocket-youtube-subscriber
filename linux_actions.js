const util = require('util')
const execFile = util.promisify(require('child_process').execFile);


async function execute(command) {
    console.log("Beginning linux command")
    const {stdout} = await execFile(command);
    return stdout
}

module.exports = { execute }

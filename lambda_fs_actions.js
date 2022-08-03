const fs = require('fs');

function writeFile(contents, path) {
      fs.writeFile(`/tmp/${path}`, contents, function (err) {
        if (err) {
            console.log("writeFile failed: " + err);
        } else {
            console.log(`writeFile succeeded: ${path}`)
        }
    });
};

async function readFile(path) {
    const data = await fs.promises.readFile(`/tmp/${path}`, 'utf8');
    return data
};

module.exports = { writeFile, readFile };

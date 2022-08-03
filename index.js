const pocket = require('./pocket_actions')
const s3 = require('./s3_actions')
const lambdafs = require('./lambda_fs_actions');
const linux = require('./linux_actions')
const lambda = require('./lambda_actions.js');

exports.handler = (event, context, callback) => {

    var one = s3.readFileAsString(${process.env.bucket_name}, "new.txt")
    
    var two = s3.readFileAsString(${process.env.bucket_name}, "archive.txt")
    
    var three = s3.readFileAsString(${process.env.bucket_name}, "cookiejar.txt")
    
    Promise.all([one, two, three]).then(([newtxt, archivetxt, cookiestxt]) => {
        lambdafs.writeFile(newtxt, "new.txt")
        lambdafs.writeFile(archivetxt, "archive.txt")
        lambdafs.writeFile(cookiestxt, "cookiejar.txt")
        
        linux.execute("./run.sh")
        .then(function(result) {
            lambdafs.readFile("new.txt")
	    .then(function(result) {
		result.split("\n").forEach(function (item) {
	            pocket.addItem(item);
		})
		lambdafs.readFile("archive.txt")
		.then(function(result) {
	            s3.writeObject(${process.env.bucket_name}, "archive.txt", result)
		});
	    });
	});

    })
};

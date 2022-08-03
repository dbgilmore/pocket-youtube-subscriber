const aws = require('aws-sdk');
aws.config.update({region: 'eu-west-2'});

function invoke(lambdaname) {
    var lambda = new aws.Lambda();
    var params = {
	FunctionName: lambdaname,
        InvocationType: 'Event',
	LogType: 'Tail'
    }

    lambda.invoke(params, function(err, data){
	if (err) {
	    console.log(err);
	}
	else {
            console.log(data);
	}
    
    });
}

module.exports = {invoke}
	


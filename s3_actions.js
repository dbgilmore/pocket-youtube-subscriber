const aws = require('aws-sdk');
const fs = require('fs');
aws.config.update({region: 'eu-west-2'});


async function readFileAsString(bucket, object) {
    var s3 = new aws.S3();

    var params = {
        Bucket: bucket,
        Key: object
        
    };
    
    const getObjectPromise = await s3.getObject(params).promise();
    return getObjectPromise.Body.toString("utf-8");
    
}

function writeObject(bucket, object, data) {
    var s3 = new aws.S3();
    
    var params = {
        Bucket: bucket,
        Key: object,
        Body: data
    }
    s3.putObject(params, function(err, data) {
        if(err) console.log(err)
        console.log(data)
    });
}


module.exports = { readFileAsString, writeObject };

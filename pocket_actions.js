const https = require('https');

function addItem(url) {
  
    var postData = JSON.stringify({
      'url' : url
    });
  
  const options = {
    hostname: process.env.base_url,
    path: `/${process.env.api_version}/add/?consumer_key=${process.env.consumer_key}&access_token=${process.env.access_token}`,
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
       'Content-Length': postData.length
     }
  };

  var req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('options', options);
    console.log('postData', postData);
  });
  
  req.on('error', (e) => {
    console.error(e);
  });
  
  req.write(postData);
  req.end();
  
}

module.exports = { addItem, };

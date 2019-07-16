var request = require('request');
var fs = require('fs')
request('http://localhost:22004/getNodeList', function (error, response, body) {
        if (!error) {
            fs.writeFile('./NodeList',body,{ 'flag': 'w' }, function(err) {
				console.log(body)
				if (err) {
					console.log(err)
				}
			})
        }
    })




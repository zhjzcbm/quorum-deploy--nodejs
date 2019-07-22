var request = require('request');
var url="http://127.0.0.1:22004/updateWhitelist";
var fs = require('fs')
const argv = process.argv
requestData = fs.readFileSync('./IP').toString()
requestData = JSON.parse(requestData)
console.log(requestData)
httprequest(url,requestData);

function httprequest(url,data){
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 请求成功的处理逻辑
        }
    });
};

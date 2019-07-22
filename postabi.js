var request = require('request');
var url="http://127.0.0.1:22004/updateContractDetails";
var fs = require('fs')
const argv = process.argv
requestData = fs.readFileSync('./bulid/abi/'+argv[2]+'.abi')
console.log(requestData)
httprequest(url,requestData);
function httprequest(url,data){
    request({
        url: url,
        method: "POST",
        headers: {
            "User-Agent": 'request'
        },
	formData:{
			name:"",
			address:argv[3],
			abi:requestData,
		}
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 请求成功的处理逻辑
        }
    });
};



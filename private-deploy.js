var request = require('request');
var url="http://localhost:22004/deployContract";
var fs = require('fs')
const argv = process.argv
requestData = fs.readFileSync('./solidity/'+argv[2])
httprequest(url,requestData);
function httprequest(url,data){
    request({
        url: url,
        method: "POST",
        headers: {
	"User-Agent": 'request',
	"content-type":'*/*'
        },
	formData:{
		file1: requestData,
		count: 1,
		privateFor:argv[3],
		private:"true",
		}
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(argv[2]+"部署成功") // 请求成功的处理逻辑
			body=JSON.parse(body)
			console.log("写调用命令为:sudo node WriteContract.js "+body[0]["address"]+"_"+body[0]["filename"]+" 参数")
			console.log("读调用命令为:sudo node ReadContract.js "+body[0]["address"]+"_"+body[0]["filename"]+" 参数")
        }
    });
};



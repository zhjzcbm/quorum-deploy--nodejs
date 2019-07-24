var fs = require('fs')
let NodeList = fs.readFileSync('./NodeList')
const argv = process.argv
NodeList = JSON.parse(NodeList)
for (var key in NodeList) {
    if(NodeList[key]['ip'] == argv[2]){
		var publicKey = NodeList[key]['publicKey']
		console.log(publicKey)
    }   
}


var request = require('request');
var fs = require('fs')
const argv = process.argv
if (argv.length==3){
	let play = async () => {
		request('http://'+argv[2]+':22004/contractList', function (error, response, body) {
			if (!error) {
				fs.writeFile('./ContractList',body,{ 'flag': 'w' }, function(err) {
					/*console.log(body)*/
					body1=JSON.parse(body)
					for (var key in body1) {
						if(body1[key]['abi'] != ""){
							var abi = body1[key]['abi']
							var name = body1[key]['contractName']
							var addr = body1[key]["contractAddress"]
							var Type = body1[key]["contractType"]
							name = name.substring(0,name.indexOf('.'))
							var exists =  fs.existsSync('../node/contracts/'+addr+'_'+name)
							if(exists==false){
								fs.mkdirSync('../node/contracts/'+addr+'_'+name,function(err){})
								fs.writeFile('../node/contracts/'+addr+'_'+name+'/ABI', abi, { 'flag': 'w' }, function(err) {
									if (err) {
										console.log(err)
									}
								})
								fs.writeFile('../node/contracts/'+addr+'_'+name+'/Type', Type, { 'flag': 'w' }, function(err) {
									if (err) {
										console.log(err)
									}
								})
								console.log('生成'+addr+'_'+name+'成功')
							}else{
								console.log("跳过合约："+addr+'的ABI')
							}
						}  
					}
				})
			}
		})
	}
	play()
}
if (argv.length==4){
	let play = async () => {
		request('http://'+argv[2]+':22004/contractList', function (error, response, body) {
			if (!error) {
				fs.writeFile('./ContractList',body,{ 'flag': 'w' }, function(err) {
					/*console.log(body)*/
					body1=JSON.parse(body)
					for (var key in body1) {
						if(body1[key]['contractAddress'] == argv[3]){
							var abi = body1[key]['abi']
							var name = body1[key]['contractName']
							var addr = body1[key]["contractAddress"]
							var Type = body1[key]["contractType"]
							name = name.substring(0,name.indexOf('.'))
							var exists =  fs.existsSync('../node/contracts/'+addr+'_'+name)
							if(exists==false){
								fs.mkdirSync('../node/contracts/'+addr+'_'+name,function(err){})
								fs.writeFile('../node/contracts/'+addr+'_'+name+'/ABI', abi, { 'flag': 'w' }, function(err) {
									if (err) {
										console.log(err)
									}
								})
								fs.writeFile('../node/contracts/'+addr+'_'+name+'/Type', Type, { 'flag': 'w' }, function(err) {
									if (err) {
										console.log(err)
									}
								})
								console.log('生成'+addr+'_'+name+'成功')
							}else{
								console.log("跳过合约："+addr+'的ABI')
							}
						}  
					}
				})
			}
		})
	}
	play()
}

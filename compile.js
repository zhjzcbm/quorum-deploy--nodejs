let fs = require('fs')
let solc = require('solc')
var path = require("path")
const argv = process.argv

if (argv.length < 3) {
	fs.readdir(__dirname+'/solidity', function(err, files){
    		for (var i=0; i<files.length; i++){
			let lotteryInfo = fs.readFileSync(__dirname+'/solidity/'+files[i])
			let file = files[i].substring(0,files[i].indexOf('.'))
			console.log('正在编译合约:'+file)
			let compileInfo = solc.compile(lotteryInfo.toString(), 1/*占位符，忽略*/)
			let {bytecode, interface} = compileInfo['contracts'][':'+file]
			fs.writeFile('./bulid/bin/'+file+'.bin', bytecode, { 'flag': 'w' }, function(err) {
					if (err){
						console.log(err)
					}
					console.log('生成bin文件到./bulid/bin/'+file+'.bin')
			})
			fs.writeFile('./bulid/abi/'+file+'.abi', interface, { 'flag': 'w' }, function(err) {
					if (err){
						console.log(err)
					}
					console.log('生成abi文件到./bulid/abi/'+file+'.abi')
			})
	
		}
	})
}
if (argv.length == 3) {
let lotteryInfo = fs.readFileSync('./solidity/'+argv[2]+'.sol')
console.log('正在编译合约:'+argv[2])
let compileInfo = solc.compile(lotteryInfo.toString(), 1/*占位符，忽略*/)

let {bytecode, interface} = compileInfo['contracts'][':'+argv[2]]


fs.writeFile('./bulid/bin/'+argv[2]+'.bin', bytecode, { 'flag': 'w' }, function(err) {
		if (err){
			console.log(err)
		}
		console.log('生成bin文件到./bulid/bin/'+argv[2]+'.bin')
})
fs.writeFile('./bulid/abi/'+argv[2]+'.abi', interface, { 'flag': 'w' }, function(err) {
		if (err){
			console.log(err)
		}
		console.log('生成abi文件到./bulid/abi/'+argv[2]+'.abi')
})
}
		

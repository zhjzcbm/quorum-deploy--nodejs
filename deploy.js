let fs = require('fs')
let solc = require('solc')
let Web3 = require('web3')
let web3 = new Web3('http://127.0.0.1:22000')
const argv = process.argv
console.log('web3版本:', web3.version)


if (argv.length < 3) {
	fs.readdir(__dirname+'/bulid/abi', function(err, files){
    		for (var i=0; i<files.length; i++){
			let file = files[i].substring(0,files[i].indexOf('.'))
			let interface = fs.readFileSync(__dirname+'/bulid/abi/'+file+'.abi')
			let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+file+'.bin')
			let deploy = async () => {
    				//1. 填写abi
    				let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
				let account = await web3.eth.getAccounts()
				console.log('当前外部账户:',account[0])
				//解锁账户
    				await web3.eth.personal.unlockAccount(account[0],'');
    				//2. 填写bytecode和构造函数参数
    				let res = await contractInstance.deploy({
        				data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        				// arguments: [], //构造函数如果没有参数，可以不写，或者为空
        				//3. send交易
    				}).send({
            				from: account[0], //部署人
            				gas: '9000000', //gas limit
            				// gasprice:
        				}, (error) => {
						if (error){console.log(error)}
						}
					)
    			//获取部署后合约的地址
			console.log('合约'+file+'的地址为:', res.options.address)
			console.log("调用合约命令:sudo node calltest.js "+res.options.address+argv[2])
			}
			//estimateTest()
			deploy()										
		}
	})
}

if (argv.length == 3){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	let estimateTest = async () => {
    		let gasUsed = await web3.eth.estimateGas({
        		// to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
        		data: '0x'+bytecode //一笔交易所携带的数据
    		})
    		//console.log('预估需要消耗的gas:', gasUsed)
    		global.gasUsed = gasUsed
    		deploy()
	}
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		// arguments: [], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: gasUsed, //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    	//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address+argv[2])
	}
	estimateTest()
}
if (argv.length == 4){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		arguments: [argv[3]], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: '9000000', //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    
    		//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address+argv[2])
	}
	deploy()
}
if (argv.length == 5){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		arguments: [argv[3],argv[4]], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: '9000000', //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    
    		//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address+argv[2])
	}
	deploy()
}
if (argv.length == 6){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		arguments: [argv[3],argv[4],argv[5]], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: '9000000', //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    
    		//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address +argv[2])
	}
	deploy()
}
if (argv.length == 7){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		arguments: [argv[3],argv[4],argv[5],argv[6]], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: '9000000', //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    
    		//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address +argv[2] )
	}
	deploy()
}
if (argv.length == 8){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		arguments: [argv[3],argv[4],argv[5],argv[6],argv[7]], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: '9000000', //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    
    		//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address + argv[2])
	}
	deploy()
}
if (argv.length == 9){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		arguments: [argv[3],argv[4],argv[5],argv[6],argv[7],argv[8]], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: '9000000', //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    
    		//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address + argv[2])
	}
	deploy()
}
if (argv.length == 10){
	let interface = fs.readFileSync(__dirname+'/bulid/abi/'+argv[2]+'.abi')
	let bytecode = fs.readFileSync(__dirname+'/bulid/bin/'+argv[2]+'.bin')
	//部署函数，属于异步操作
	let deploy = async () => {
    		//1. 填写abi
    		let contractInstance = await new web3.eth.Contract(JSON.parse(interface))
		let account = await web3.eth.getAccounts()
		console.log('当前账户:',account[0])
		//解锁账户
    		await web3.eth.personal.unlockAccount(account[0],'');
    		//2. 填写bytecode和构造函数参数
    		let res = await contractInstance.deploy({
        		data: '0x'+bytecode, //合约的二进制代码, 上链的数据
        		arguments: [argv[3],argv[4],argv[5],argv[6],argv[7],argv[8],argv[9]], //构造函数如果没有参数，可以不写，或者为空
        		//3. send交易
    		}).send({
            		from: account[0], //部署人
            		gas: '9000000', //gas limit
            		// gasprice:
        		}, (error) => {
				if (error){console.log(error)}
				}
			)
    
    		//获取部署后合约的地址
	console.log('合约地址:', res.options.address)
	console.log("调用合约命令:sudo node calltest.js "+res.options.address + argv[2])
	}
	deploy()
}



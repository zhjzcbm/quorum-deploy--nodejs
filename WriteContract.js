let fs = require('fs')
let Web3 = require('web3')
/*
这里第二个参数是需要调用的合约地址+合约名
*/
const argv = process.argv
let ContractName = argv[2]
let info = fs.readFileSync('./contracts/'+ContractName+'/ABI')
console.log(ContractName.substring(0,42))
let addr = ContractName.substring(0,42)
let web3 = new Web3('http://127.0.0.1:22000')
if (argv.length==3){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
				console.log(result)
		})
	}
	call()
}
if (argv.length==4){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(argv[3]/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
					console.log(result)
		})
	}
	call()
}
if (argv.length==5){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(argv[4]/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
					console.log(result)
		})
	}
	call()
}
if (argv.length==6){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(argv[5]/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
					console.log(result)
		})
	}
	call()
}
if (argv.length==7){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(argv[6]/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
					console.log(result)
		})
	}
	call()
}
if (argv.length==8){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(argv[7]/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
					console.log(result)
		})
	}
	call()
}
if (argv.length==9){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(argv[8]/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
					console.log(result)
		})
	}
	call()
}
if (argv.length==10){
	let call = async () => {
			let contractInstance = new web3.eth.Contract(JSON.parse(info),addr)
			let account = await web3.eth.getAccounts()
			console.log('当前账户:',account[0])
			//解锁账户
		await web3.eth.personal.unlockAccount(account[0],'');
			contractInstance.methods.Set(argv[9]/*如果需要有参数的话*/).send({
			from: account[0],
			}).then((result) => {
					console.log(result)
		})
	}
	call()
}
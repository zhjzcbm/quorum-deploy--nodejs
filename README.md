# 自制quorum部署合约框架

## 环境准备

quroum带UI界面的部署工具

https://github.com/synechron-finlabs/quorum-maker/wiki



运行环境可以再我这篇博客里找 

[ubuntu里nodejs+npm+web3+solc环境搭建](https://blog.csdn.net/weixin_42608885/article/details/93340253)

[centouOS安装nodejs+npm+web3+solc环境](https://blog.csdn.net/weixin_42608885/article/details/94963425)

安装完后



## 文件介绍

文件夹 **bulid** 存放合约代码的ABI和BIN。

文件夹 **solidity**存放合约文件 





### **compile.js** 

负责编译合约生成abi和bin到bulid 中，以方便合约调用。

使用方法:

​	node compile.js 合约文件名 

```
node compile.js test
```

**注意我这里必须要 合约文件名和 合约名 相同才行。大小写也要一样**

**如果编译的时候不输入合约参数**，**它默认编译所有存放在solidity文件夹下的合约文件.**

编译时注意合约版本



### **deploy.js**

 负责部署合约，它会读取已经编译好的合约abi进行部署

使用方法:

​	node deploy.js 合约文件名 

```
node deploy.js test
```

 执行完毕后会返回合约地址.

同样:如果部署的时候不输入合约名，它默认部署所有已编译的合约文件.

合约名后面可以加构造函数，最多支持8个构造函数

```
node deploy.js test a a a a 2 3 4 5 
```



### **getNodeList.js** 

可以从quorum-maker工具中获取所有网上节点的公钥以及IP地址信息，并把它保存在当前目录下取名为**NodeList**,方便后续其他文件调用.

使用方法:

```
node getNodeList.js 
```





### private_deploy.js

负责部署私有合约

使用方法:

​	node private_deploy 对端节点的ip 合约名或者1

示例:

```
node private_deploy 192.168.1.100 test 
```

他会读取NodeList文件里面的 ip 对应节点的公钥。

test参数是要部署的合约的名字

如果

```
node  private_deploy 192.168.1.100 1
```

这里的1代表批量部署所有私有合约到IP对应节点(暂时不支持输入构造函数参数)



### getContractList.js

获取指定节点所上传的合约的abi 合约名等信息。主要是用来获取合约及ABI信息

```
node getContractList.js
```

他会在目录下生成一个文件ContractList里面包含了指定节点部署过的合约地址以及合约abi



### postabi.js

把abi附加到合约上供其他节点调用

```
node postabi.js set  合约地址
```



## 常见错误

#### 错误1：

```
UnhandledPromiseRejectionWarning: Error: Invalid JSON RPC response: ""

```

是因为脚本默认连接本地供应商 地址和端口默认是127.0.0.1:22000的

改一下供应商即可

后续错误可以跟我提，我将把它加入到本文档中。节省大家时间

#### 错误2：

```
Error: Invalid number of parameters for "undefined". Got 0 expected 2!

```

这个问题是在部署合约的时候会碰到  原因是 合约有构造函数 需要输入参数来部署。

所以如果使用 node deploy.js 来全部部署的话要注意文件夹里的合约不要有需要输入参数的构造函数

#### 错误3：

部署的时候卡在这里

```
[zyc@zq7 quorum-deploy]$ node deploy.js test1 1 2
web3版本: 1.0.0-beta.35

```

需要检查部署脚本里连接的供应商IP及端口是否填错

#### 错误4：

调用合约的时候可能会出现这个提示：

```
 Error: Returned values aren't valid, did it run Out of Gas?

```

这个是因为web3.js的一个bug如果你是web3 1.0.0-beta.36版本的话降级到web3 1.0.0-beta.35即可解决

运行这个命令降级web3的版本

```
sudo npm i web3@1.0.0-beta.35 --save

```

#### 错误5:

注意：调用私有合约写入的时候需要指定对端的节点公钥，如果不输入可能报错也可能不报错、但是数据是一定写入不进去的。

如果加上了公钥字段和信息后报错如下：

```
Error: Returned error: Non-200 status code: &{Status:500 Internal Server Error StatusCode:500 Proto:HTTP/1.1 ProtoMajor:1 ProtoMinor:1 Header:map[Date:[Mon, 22 Jul 2019 03:38:30 GMT] Server:[Warp/3.2.13]] Body:0xc42020f7c0 ContentLength:-1 TransferEncoding:[chunked] Close:false Uncompressed:false Trailer:map[] Request:0xc4200ec600 TLS:<nil>}

```

说明你的公钥输入错误。务必检查一遍

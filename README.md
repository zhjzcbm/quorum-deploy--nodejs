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

如果编译的时候不输入合约参数，它默认编译所有存放在solidity文件夹下的合约文件.

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


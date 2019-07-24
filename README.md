# 自制quorum部署合约框架

## 环境准备

quroum带UI界面的部署工具

https://github.com/synechron-finlabs/quorum-maker/wiki



运行环境可以再我这篇博客里找 

[ubuntu里nodejs+npm+web3+solc环境搭建](https://blog.csdn.net/weixin_42608885/article/details/93340253)

[centouOS安装nodejs+npm+web3+solc环境](https://blog.csdn.net/weixin_42608885/article/details/94963425)

安装完后



请把此文件夹放到quorum-maker-master/你的节点文件夹/node目录下

## 文件夹介绍

文件夹 **solidity**存放合约文件 ，部署之前把需要部署的合约放入这个文件夹

部署的文件名最好和合约名相同

## 部署文件

### **deplo.js**

 负责部署合约，它会读取已经编译好的合约abi进行部署

使用方法:

```
node deploy.js 合约名.sol
```

暂不支持构造函数

### deploy.sh

这个shell脚本文件，直接运行会自动把solidity里面的合约文件全都部署一遍

```
sudo ./deploy.sh
```

### private-deploy.js

部署私有合约的文件

```
ndoe private-deploy.js  合约名.sol 对端账户公钥
```

### private-deploy.sh

部署solidity文件夹下所有合约并且以私有合约的方式

```
sudo private-deploy.sh 对端账户公钥
```



## 获取其他节点公钥

### **getNodeList.js** 

可以从quorum-maker工具中获取所有网上节点的公钥以及IP地址信息，并把它保存在当前目录下名为**NodeList**,方便后续其他文件调用.

使用方法:

```
node getNodeList.js 
```



### getpublicKey.js

自动读取**NodeList**文件里的公钥信息

```
node getpublicKey.js 要查询公钥的IP地址
```



### getpublicKey.sh

同时执行**getNodeList.js**和**getpublicKey.js**脚本。

直接返回公钥

```
sudo getpublicKey.sh 要查询公钥的IP地址
```



## 获取其他节点ABI



### getContractList.js

获取指定节点所上传的合约的abi 合约名等信息。主要是用来获取合约及ABI信息

```
node getContractList.js ip地址
```

他会在目录下生成一个文件ContractList里面包含了指定节点部署过的合约地址以及合约abi，并且在当前节点目录下contracts目录下创建abi文件方便后续调用



```
node getContractList.js ip地址 合约地址
```

代表只获取这个合约地址的abi

## 调用合约



### ReadContract.js

用于读取合约内容

```
node ReadContract.js 合约ABI所在文件夹名 参数1 参数2 ....
```

最多支持9个参数



### WriteContract.js

用于写入合约内容

```
node WriteContract.js 合约ABI所在文件夹名 参数1 参数2 ....
```

最多支持9个参数



### private_WriteContract.js

用于写私有合约内容

```
node private_WriteContract.js 合约ABI所在文件夹名    对端节点账户公钥   参数1  参数2 ....
```

最多支持8个参数    方法

### private_WriteContract.js

## 常见错误


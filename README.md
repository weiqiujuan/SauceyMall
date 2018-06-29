
# SauceyMall

## 项目简介：

#### 前后端完全分离，模块化开发的前端电商项目

## 项目搭建和开发环境

> 开发环境：nodejs,npm,git,webstorm,chrome 

> 项目搭建：git,webpack,webpack-dev-server


## 项目功能：

### 项目通用功能：

##### 1.  通用js工具

* 网络数据请求功能

* 获取服务端接口url，参数功能

* hogan 渲染html模板功能

* 通用提示功能，验证功能封装（手机号，邮箱验证，非空验证）

##### 2. 通用布局

##### 3. 通用样式

##### 4. 通用导航

##### 5. 通用提示页

### 用户模块

##### 1. 用户登录页面

##### 2. 用户注册页面

##### 3. 找回密码功能

##### 4. 修改密码功能

##### 5. 个人中心页面

### 商品模块

##### 1. 首页页面

##### 2. 商品列表页面

##### 3. 商品详情页

### 购物车模块

>主要是购物车模块的逻辑实现，有点难

### 订单模块

##### 1. 订单确认页面（逻辑实现有难度）

##### 2. 订单列表页面

##### 3. 订单详情页面

### 支付模块

>就一个支付页面，比较有技术含量的是，添加了支付二维码自动刷新功能

##项目启动和使用

#### 安装依赖
> npm install (--registry=https://registry.npm.taobao.org) 

> 可用换源的方式加快依赖的安装

#### 启动文件
> npm run dev(lnux)  

> npm run dev_win(windows)  

> http://localhost:8088/dist/view/index.html

#### 打包文件
>npm run dist(linux)  

>npm run dist_win(windows)  

## 项目所用资料

 [接口文档地址](https://gitee.com/imooccode/happymmallwiki/wikis/Home)
 
 [遇到一些问题的解决地址](https://www.imooc.com/article/26428)
 
## 声明一下

> 此次发布的项目是经过更新的，webpack从1.x.x升级到了4.x.x，对node,npm版本要求也很高，不需要用Charles代理软件，直接将跨域问题放到webpack中解决。
 
> 之前的配置文件和依赖版本如下所示：node版本最好6.12.3


   
    "devDependencies": {
      "css-loader": "^0.28.1",
      "extract-text-webpack-plugin": "^1.0.1",
      "file-loader": "^0.11.1",
      "html-loader": "^0.4.5",
      "html-webpack-plugin": "^2.28.0",
      "style-loader": "^0.17.0",
      "url-loader": "^0.5.8",
      "webpack": "^1.15.0",
      "webpack-dev-server": "^1.16.5"
    },
    "dependencies": {
      "font-awesome": "^4.7.0",
      "hogan.js": "^3.0.2"
    }


 
>  这个时候会用到代理软件Charles
>> 在开发的时候要请求测试环境的接口，
直接请求会造成跨域，所以先请求html所在域下面的接口地址，
再用代理软件把请求劫持到远程的接口地址,用起来比较简易。

##### 在开发中遇到的问题，记录在CSDN了中。
                
                
               





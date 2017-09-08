# get start  
dva作者：sorrycc

## 安装dva

```
npm install -g dva-cli
or  
cnpm install -g dva-cli
```

## 新建一个项目
```
dva new myapp --demo  
```
--demo 适用于demo级别的项目；正常项目不需要添加

## 启动
```
npm start
```


# 项目的配置

## [roadhog](https://github.com/sorrycc/roadhog)
一个简单易用的命令行工具，同样来自于sorrycc  
使用dva项目中的.roadhogrc文件就是roadhog的配置文件  
不推荐使用webpack.config.js进行配置

详细配置项见 [https://github.com/sorrycc/roadhog](https://github.com/sorrycc/roadhog)

### 支持antd

```
$ npm i antd --save
$ npm i babel-plugin-import --save-dev
```

修改 .roadhogrc，在 "extraBabelPlugins" 里加上：

```
["import", { "libraryName": "antd", "style": "css" }]
```

### 设置代理
 配置代理，能通过 RESTFul 的方式访问:

```
"proxy": {
  "/api": {
    "target": "http://jsonplaceholder.typicode.com/",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "" }
  }
},
```
本地访问 [http://localhost:8000/api/users](http://localhost:8000/api/users)访问数据
### 配置主题
配置主题，实际上是配 less 的 modifyVars  

```
"theme": {
  "@primary-color": "#1DA57A"
}
```
或者使用文件配置
# 动手
快速创建文件一般需要手动去修改

## app  
```
const app = dva(opt)
```

### extraReducers
手动去添加一些redux中间件

### extraEnhancers
指定额外的 StoreEnhancer 

## router 
快速创建router

```
dva g route ${namespace}
```
默认创建一个js和css文件
## modal
快速创建一个modal：
  
```
dva g model ${namespace}
```

当你执行这条命令的同时，会在你的入口文件写入

```ecmascript 6
app.model(require("./models/${namespace}"))
```

- namespace
- state：initState
- reducers: 处理action 返回新的state
- effects：
- subscriptions

## component

```
dva g component ${folderName}/${fileName}
```

默认创建一个js和css文件

通常需要 connect Model的组件都是 Route Components，组织在/routes/目录下，  
而/components/目录下则是纯组件（Presentational Components）。

### effects
主要用于异步请求

- call: 用于调用异步逻辑，支持 promise 
- put: 获取异步数据后，触发action，将数据写入到state
- select: 选取state的数据  

详情见[API文档](http://leonshi.com/redux-saga-in-chinese/docs/basics/UsingSagaHelpers.html)

### subscriptions
Subscriptions 是一种从 源 获取数据的方法  
Subscription 语义是订阅，用于订阅一个数据源，然后根据条件 dispatch 需要的 action。  
数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变化、history 路由变化等等。  

一篇文章的意思是，使用redux的组件 没有必要去使用 生命周期 可以将数据获取的时间提前  
subscriptions提供了解决方案 订阅路由 在匹配路由时 去dispatch相应的action


## 一些插件介绍

### dva-loading
创建  

```ecmascript 6
import createLoading from 'dva-loading'
import dva from 'dva'

const app = dva({
  ...createLoading({
    effect: true,
  })
})

```
默认的namespace为loading

createLoading返回一个对象  

```
  return {
    extraReducers,
    onEffect,
  }
```

extraReducers

添加一个额外的reducer key为namespace 包含SHOW HIDE和default  
还有一些逻辑的处理（这是关键)  

loading的结构为：  
```
{
  global: false,
  modal: {
    xxx: false,
    ssss: false
  },
  ...
}
```

onEffect  

```
  function onEffect(effect, { put }, model, actionType) {
    const { namespace } = model;
    return function*(...args) {
      yield put({ type: SHOW, payload: { namespace, actionType } });
      yield effect(...args);
      yield put({ type: HIDE, payload: { namespace, actionType } });
    };
  }
```
相当于在所有的effect执行之前调用show  
在结束之后调用hide

源码见[dva-loading](https://github.com/dvajs/dva-loading)

# 遗留待解决的问题

- 逻辑的复用，reducer的复用
  - [https://github.com/dvajs/dva/issues/388](https://github.com/dvajs/dva/issues/388)

## 疑问

- 在[antd-admin](https://github.com/zuiidea/antd-admin)基本上没使用过生命周期；数据加载都是在modal的subscriptions

# 参考链接
- [https://github.com/sorrycc/blog/issues/18](https://github.com/sorrycc/blog/issues/18)
- [https://github.com/sorrycc/roadhog](https://github.com/sorrycc/roadhog)
- [https://github.com/dvajs/dva-knowledgemap/blob/master/README.md](https://github.com/dvajs/dva-knowledgemap/blob/master/README.md)
- [https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)
- [https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md)
- [https://segmentfault.com/a/1190000009800398](https://segmentfault.com/a/1190000009800398)

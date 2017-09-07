#get start  
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

## router 
快速创建router
```
dva g route ${namespace}
```

## modal
快速创建一个modal：  
```
dva g model ${namespace}
```

export 一个对象
- namespace
- state：initState
- reducers: 处理action 返回新的state
- effects：
- subscriptions

## 



# 参考链接
- [https://github.com/sorrycc/blog/issues/18](https://github.com/sorrycc/blog/issues/18)
- [https://github.com/sorrycc/roadhog](https://github.com/sorrycc/roadhog)

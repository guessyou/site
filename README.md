##栏目

Recent
Tags
Popular
Users
Groups
Search

Register
Login

####项目框架设计

首先实现服务器端的渲染，之后再扩展实现单页面应用操作

```js
src/js
|-  data          //一些模拟数据，最终这里放置缓存的数据
|     App.js
|     docs.js           //首页数据
|     news.json         //更新提醒数据
|
|- /lib           //库文件
|   |- events.js        //事件基类
|   |- page.js          //微客户端路由器
|   |- util.js          //工具包
|   |- ajax.js          //ajax请求处理
|   |- store.js         //缓存处理
|
|- /app           //项目文件
|   |- app.js           //主程序
|   |- config.js        //配置(包含以下两部分)
|       |- settings.js      //默认设置
|       |- db.js            //数据库
|
|   |- appcache.js      //缓存
|   |- searcher.js      //搜索
|   |- shortcuts.js     //快捷键
|
|- /routes        //路由
|   |- web_router.js    //页面路由
|   |- api_router_v1.js //管理后台路由
|
|- /models        //模型
|   |- model.js
|
|- /controllers   //控制器
|   |- controllers.js
|
|- /views         //视图
|   |- view.js
|   |- ...
|
|- /templates     //模板
|   |- layout.html
|   |- index.html
|   |- main.html
|   |- sidebar.html
|   |- list.html
|   |- path.html
|
|- /test           //测试
|- /vendor         //外部依赖
|   |- zepto.js
|   |- underscore.js
|   |- fastclick.js
|   |- cookies.js
|   |- prism.js
|   |- raven.js
|
|- application.js     //应用入口
|- debug.js           //调试及检测
|
|- README.md
```

## 版权和许可 

基于 [MIT License](http://en.wikipedia.org/wiki/MIT_License "WikiPedia 中关于 MIT License 的描述") 开源。

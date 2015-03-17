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

可服务器端渲染，亦可本地单页面应用操作

```js
src/js
|-  data          //数据
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
|   |- config.js        //配置
|   |- router.js        //路由
|   |- settings.js      //默认设置
|   |- db.js            //数据
|   |- appcache.js      //缓存
|   |- searcher.js      //搜索
|   |- shortcuts.js     //快捷键
|
|- /models        //模型
|   |- model.js         //
|   |- doc.js           //
|   |- entry.js         //
|   |- type.js          //
|
|- /collections   //集合
|   |- collection.js    //
|   |- docs.js          //
|   |- entries.js       //
|   |- types.js         //
|
|- /views         //视图
|   |- view.js          //
|   |- /layout
|   |- /content
|   |- /pages
|   |- /sidebar
|   |- /search
|   |- /list
|   |- /misc
|
|- /templates     //模板
|   |- base.js          //
|   |- error_tmpl.js
|   |- notice_tmpl.js
|   |- notif_tmpl.js
|   |- path_tmpl.js
|   |- sidebar_tmpl.js
|   |- /pages
|   |   |- about_tmpl.js
|   |   |- help_tmpl.js
|   |   |- new_tmpl.js
|   |   |- offine_tmpl.js
|   |   |- root_tmpl.js
|   |   |- type_tmpl.js
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

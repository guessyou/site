/*!
 * nodeclub - route.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

var express = require('express'),
    router = express.Router();

var config = require('../config'),
    crypto = require('crypto'),
    passport = require('passport');

// var crypto = require('crypto'),
//     User = require('../models/user.js'),
//     Post = require('../models/post.js'),
//     Comment = require('../models/comment.js'),
//     passport = require('passport');

// var rss = require('./controllers/rss');
var site = require('../controllers/site');
// var sign = require('./controllers/sign');
// var user = require('./controllers/user');
// var topic = require('./controllers/topic');
// var reply = require('./controllers/reply');
// var search = require('./controllers/search');
// var github = require('./controllers/github');
// var message = require('./controllers/message');
var staticController  = require('../controllers/static');


//需要实现的路由
var routes = [
    //site
    ['*', 'before'], //初始化整体界面
    ['/', 'root'],

    //static
    ['/topic/:topic', 'topic'],  //话题
    ['/tags', 'tags'],  //标签
    ['/tags/:tag', 'tag'],
    ['/help', 'help'],  //帮助
    ['/news', 'news'],  //更新
    ['/about', 'about'],//关于
    ['/offline', 'offline'],//离线
    ['/search', 'search'],  //搜索
    ['/q/:key', 'search'],  //搜索

    //
    ['/category/:category', 'category'],  //分类

    //user
    ['/users', 'users'],//用户
    ['/u/:user', 'user'],

    //auth
    ['/user/login', 'login'],
    ['/user/register', 'register'],
    ['/user/forgot', 'forgot'], //忘记密码
    ['/user/oauth/:site', 'oauth'], //第三方登录 github weibo qq

    ['/a/:article', 'article'],  //文章
    ['/edit', 'edit'],  //添加
    ['/edit', 'edit'],  //编辑
    ['/edit', 'edit'],  //删除等

    ['/explore', 'explore'],  //发现
    ['/group', 'group'],  //组织
    ['/events', 'events'],//事件
    ['/jobs/:job', 'jobs'],

    //expert 专家
    //主题/系列

    ['*', 'notFound']
];



//router.get('*', site.before);
// home page
router.get('/', site.index);
// sitemap
//router.get('/sitemap.xml', site.sitemap);
// mobile app download
//router.get('/app/download', site.appDownload);

router.get('/help', staticController.help);
router.get('/news', staticController.news);
router.get('/about', staticController.about);
// router.get('/faq', site.faq);
// router.get('/faq', staticController.faq);
// router.get('/getstart', staticController.getstart);
// router.get('/robots.txt', staticController.robots);
// router.get('/api', staticController.api);
//router.get('/offline', site.offline);



// router.get('/*', site.notFound);

//
// Our Routes
// 分类 标签 帮助 搜索 用户 登录 注册 增删改查
//

// var routes = [{
//     name: "index",
//     match: /^\/(index|index.html)?/i
// },{
//     name: "list",
//     match: /^\/(javascript|js|html|css)(\/\w)?/i
// }, {
//     name: "tags",
//     match: /^\/tags\/[\s\S]+/i
// }, {
//     name: "search",
//     match: /^\/q\/[\s\S]+/i
// }, {
//     name: "golbal_objects",
//     match: /^\/golbal_objects\/[\s\S]+/i
// }];
//return routes;

















module.exports = router;

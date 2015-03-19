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
// var staticController  = require('./controllers/static');


// home page
router.get('/', site.index);
// sitemap
//router.get('/sitemap.xml', site.sitemap);
// mobile app download
//router.get('/app/download', site.appDownload);





//
// Our Routes
// 分类 标签 帮助 搜索 用户 登录 注册 增删改查
//

var routes = [{
    name: "index",
    match: /^\/(index|index.html)?/i
},{
    name: "list",
    match: /^\/(javascript|js|html|css)(\/\w)?/i
}, {
    name: "tags",
    match: /^\/tags\/[\s\S]+/i
}, {
    name: "search",
    match: /^\/q\/[\s\S]+/i
}, {
    name: "golbal_objects",
    match: /^\/golbal_objects\/[\s\S]+/i
}];
//return routes;

var routes = [
    ['/', 'root'],
    ['/tags', 'tags'],  //标签
    ['/tags/:tag', 'tag'],
    ['/help', 'help'],  //帮助
    ['/search', 'search'],  //搜索

    ['/users', 'users'],//用户
    ['/user/login', 'login'],
    ['/user/register', 'register'],
    ['/user/forgot', 'forgot'], //忘记密码
    ['/user/oauth/:site', 'oauth'], //第三方登录 github weibo qq
    ['/user/:user', 'user'],

    ['', ''],  //添加
    ['', ''],  //编辑
    ['', ''],  //删除等
    
    ['/topic/:topic', 'topic'],  //话题

    ['/offline', 'offline'],//离线
    ['/about', 'about'],//关于
    ['/news', 'news'],  //更新
    ['/explore', 'explore'],  //发现
    ['/group', 'group'],  //组织
    ['/events', 'events'],//事件
    ['/jobs/:job', 'jobs'],

    ['*', 'notFound']
];















module.exports = router;

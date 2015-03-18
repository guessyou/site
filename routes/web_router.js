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



//需要实现的路由
var routes = [
    ['*', 'before'],
    ['/', 'root'],
    ['/offline', 'offline'],
    ['/about', 'about'],
    ['/news', 'news'],
    ['/help', 'help'],
    ['/:doc-:type/', 'type'],
    ['/:doc/', 'doc'],
    ['/:doc/:path(*)', 'entry'],
    ['*', 'notFound']
];



var routes = [
    //知乎
    ['/topic/:topic[hot|top|questions]', 'topic'],//话题
    ['/explore', 'explore'],//发现
    ['/people:user', 'user'],//用户

    //http://stackoverflow.com/
    ['/tags/:tag', 'tag'],//标签
    ['/tags/:tag', 'tag']//标签
    // /search?q=aaawww
    // /tagged/html
    // tour

    //http://segmentfault.com/
    ['/tags/', 'tag'],//标签首页
    ['/blogs/', 'blogs'],//文章首页
    ['/events/', 'events'],//活动首页
    ['/users/', 'users'],//用户首页
    ['/sites/', 'sites'],//子站
    ['/t/:tag[blogs|info]', 'tag'],//标签
    ['/p/:page', 'page'],//文章
    ['/blogs/:user/:page', 'blogs'],//文章
    ['/u/:user', 'user'],//用户
    ['/user/re', 'user'],//用户
    //http://segmentfault.com/user/oauth/google
    //http://segmentfault.com/user/register
    //http://segmentfault.com/user/login

    ['/questions/[newest|hottest|unanswered]', 'questions'],//问答
    []
];













module.exports = router;

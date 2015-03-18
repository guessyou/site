/*!
 * nodeclub - route.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

var express = require('express'),
    router = express.Router();

var config = require('./config'),
    crypto = require('crypto'),
    passport = require('passport');

// var crypto = require('crypto'),
//     User = require('../models/user.js'),
//     Post = require('../models/post.js'),
//     Comment = require('../models/comment.js'),
//     passport = require('passport');

// var rss = require('./controllers/rss');
var site = require('./controllers/site');
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
router.get('/sitemap.xml', site.sitemap);
// mobile app download
router.get('/app/download', site.appDownload);


module.exports = router;

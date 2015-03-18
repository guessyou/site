/*!
 * nodeclub - site index controller.
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * Copyright(c) 2012 muyuan
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var config = require('../config');
var xmlbuilder = require('xmlbuilder');
var eventproxy = require('eventproxy');

// var User = require('../proxy').User;
// var Topic = require('../proxy').Topic;
// var cache = require('../common/cache');
// var renderHelper = require('../common/render_helper');


exports.index = function (req, res, next) {
  // var page = parseInt(req.query.page, 10) || 1;
  // page = page > 0 ? page : 1;
  // var tab = req.query.tab || req.session.tab || 'all';

  // req.session.tab = tab;

  // var proxy = new eventproxy();
  // proxy.fail(next);

  // // 取主题
  // var query = {};
  
  res.render('index', { config: config });

};



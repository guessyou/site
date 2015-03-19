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

var Model = require('../models/model.js');
var request = require("../models/request").request;

// var User = require('../proxy').User;
// var Topic = require('../proxy').Topic;
// var cache = require('../common/cache');
// var renderHelper = require('../common/render_helper');

/*
  规划实现，按区块取数据并可进行局部渲染，目前分两步
    1、before 处理整体界面，包括侧边栏的数据
    2、处理对应路由，如index，tags等
  区块，从路由上即可分辨出，可以并行处理
  
  两块区域处理完毕，统一渲染界面
 */

exports.before = function (req, res, next) {
  // var page = parseInt(req.query.page, 10) || 1;
  // page = page > 0 ? page : 1;

  // var proxy = new eventproxy();
  // proxy.fail(next);

  // 取主题
  // var query = {};
  // var limit = config.list_topic_count;
  // var options = { skip: (page - 1) * limit, limit: limit, sort: '-top -last_reply_at'};
  // var optionsStr = JSON.stringify(query) + JSON.stringify(options);
  
  //console.log(next)
  //res.render('index', { config: config });

  //var response = Model.categoryAll(req, res);
  
  request("/category/readAll", {}, function(err, data){
      if(err){
        res.render('404', {errmsg: err.message});
      } else{

        //res.setHeader("Content-Type", "text/javascript");
        var json = JSON.parse(data);
        var category = json.body.category;

        category = category.filter(function(item){
            return !item._parent_id
        });

        res.render('index', { 'list': category });
        //res.send("var sideBarData = " + JSON.stringify(category, null, 4) + ";");
      }
  });

}

exports.index = function (req, res, next) {

  // var data = [];
  // res.render('index', { 'list': data });
}

exports.about = function (req, res, next) {
  var data = [];
  res.render('index', { 'list': data });
}

exports.help = function (req, res, next) {
  var data = [];
  res.render('index', { 'list': data });
}
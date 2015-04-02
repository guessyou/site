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
var async = require('async');

// async.auto({
//   readData: async.apply(fs.readFile, 'data.txt', 'utf-8')
// }, callback);

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

exports.before = function (req, res, next) {
  
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

        //sidebar
        
        //res.send("var sideBarData = " + JSON.stringify(category, null, 4) + ";");
      }
  });

}


var asyncFnc = function(obj,callback){
    obj.sidebar = function(callback){
        console.log('... get_sidebar_data');

        request("/category/readAll", {}, function(err, data){
            var json = JSON.parse(data);
            var category = json.body.category;

            var sidebar_data = category.filter(function(item){
                return !item._parent_id
            });

            callback(null, sidebar_data);
        });
        // async code to get some data 
        //callback(null, 'data', 'converted to array');
    }
    async.auto(obj,function(err, data) {
        if(err){
            res.render('404', {errmsg: err.message});
        }else{
            callback(data);
        }
    });
};

exports.index = function (req, res, next) {
    asyncFnc({
        route: function(callback){
            console.log('... get_index_data');
            var data1 = '首页';
            callback(null, data1);
        }
    }, function(data){
        var category = data.sidebar;
        var route = data.route;
        res.render('index', { 'list': category,'route': route });
    });
}

exports.about = function (req, res, next) {
    asyncFnc({
        route: function(callback){
            console.log('... get_index_data');
            var data1 = '关于我们';
            callback(null, data1);
        }
    }, function(data){
        var category = data.sidebar;
        var route = data.route;
        res.render('index', { 'list': category,'route': route });
    });
}

exports.help = function (req, res, next) {
    asyncFnc({
        route: function(callback){
            console.log('... get_index_data');
            var data1 = '帮助';
            callback(null, data1);
        }
    }, function(data){
        var category = data.sidebar;
        var route = data.route;
        res.render('index', { 'list': category,'route': route });
    });
}

exports.news = function (req, res, next) {
    asyncFnc({
        route: function(callback){
            console.log('... get_index_data');
            var data1 = '更新';
            callback(null, data1);
        }
    }, function(data){
        var category = data.sidebar;
        var route = data.route;
        res.render('index', { 'list': category,'route': route });
    });
}
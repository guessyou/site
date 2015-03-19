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


exports.index = function (req, res, next) {
  var page = parseInt(req.query.page, 10) || 1;
  page = page > 0 ? page : 1;

  var proxy = new eventproxy();
  proxy.fail(next);

  // 取主题
  // var query = {};
  
  res.render('index', { config: config });

};

exports.index = function (req, res, next) {
  var page = parseInt(req.query.page, 10) || 1;
  page = page > 0 ? page : 1;

  var proxy = new eventproxy();
  proxy.fail(next);

  // 取主题
  var query = {};
  var limit = config.list_topic_count;
  var options = { skip: (page - 1) * limit, limit: limit, sort: '-top -last_reply_at'};
  var optionsStr = JSON.stringify(query) + JSON.stringify(options);
  
  //console.log(next)
  //res.render('index', { config: config });

  //var response = Model.categoryAll(req, res);
  request("/category/readAll", {}, function(err, data){
      if(err){
        res.render('404', {errmsg: err.message});
      } else{

        //res.setHeader("Content-Type", "text/javascript");
        //res.send( data )
        var json = JSON.parse(data);
        var categoryData = json.body.category;
        var category = [];
        categoryData.forEach(function(item){
          var newItem = {
            "slug": item.slug,
            "name": item.name,
            "id" : item._id
          };
          if(!item._parent_id){
            category.push(newItem);
            //newItem["parent_id"] = item._parent_id;
          }
        });
        // category.forEach(function(item){
        //     categoryData.forEach(function(subItem){
        //         if(item.id == subItem._parent_id){
        //             var newItem = {
        //               "slug": subItem.slug,
        //               "name": subItem.name,
        //               "id" : subItem._id,
        //               "parent_id": subItem._parent_id
        //             };
        //             item.sublist = item.sublist || [];
        //             item.sublist.push(newItem);
        //         }
        //     });
        // });

        res.render('index', { 'list': category });
        //res.send("var sideBarData = " + JSON.stringify(category, null, 4) + ";");
      }
  });


}



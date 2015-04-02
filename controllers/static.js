


// async.auto({
//   readData: async.apply(fs.readFile, 'data.txt', 'utf-8')
// }, callback);

var Model = require('../models/model.js');
var fs = require('fs');
var path = require('path');
var request = require("../models/request").request;
var async = require('async');
var asyncFnc = require('./asyncfnc');


var static_path = '../data';
var getPath = function(str){
    return path.join(__dirname, static_path, str);
}
var path = {
    'about': getPath('/about.js'),
    'help': getPath('/help.js'),
    'news': getPath('/news.json')
};

var help_data = require(path.help);
exports.about = function (req, res, next) {
    asyncFnc({
        //route: async.apply(fs.readFile, path.about, 'utf-8')
        route: function(callback){

            fs.readFile(path.about, {
                'encoding':'utf8'
            }, function (err, data) {
              //if (err) throw err;
              if(err){
                console.log(err);
              }
              callback(null, data);
            });
            //var data = fs.readFile(path.help, 'utf-8');
            //console.log(data);
            //var data = 'about';
            
        }
    }, function(data){
        var category = data.sidebar;
        var route = data.route;
        res.render('static', { 'list': category,'route': route });
    });
}

exports.help = function (req, res, next) {
    asyncFnc({
        route: function(callback){
            //fs.readFile('data.txt', 'utf-8', cb);
            //var data = fs.readFileSync(path.about, 'utf-8');
            data = help_data;
            callback(null, data);
        }
    }, function(data){
        var category = data.sidebar;
        var route = data.route;
        res.render('static', { 'list': category,'route': route });
    });
}

exports.news = function (req, res, next) {
    asyncFnc({
        route: function(callback){

            fs.readFile(path.news, {
                'encoding':'utf8'
            }, function (err, data) {
              if(err){
                console.log(err);
              }
              //var news = JSON.parse(data);
              callback(null, data);
            });
        }
    }, function(data){
        var category = data.sidebar;
        var route = data.route;
        res.render('static', { 'list': category,'route': route });
    });
}

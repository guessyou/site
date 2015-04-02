

var async = require('async');
var request = require("../models/request").request;

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


module.exports = asyncFnc;
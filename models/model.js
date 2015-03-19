var mongodb = require('../config'),
    //markdown = require('markdown').markdown,
    //ObjectID = require('mongodb').ObjectID,
    request = require("./request").request;

// function Model(name, head, post) {
//   this.name = name;
//   this.head = head;
//   this.post = post;
// }

var Model = {};

//
// _model.CreateModel = function(url, opt) {
//     return new function() {
//         var opt = opt || {};
//         this.url = url;
//         this.param = opt.param || {};
//     };
// };


module.exports = Model;

Model.categoryAll = function(req, res){
  request("/category/readAll", {}, function(err, data){
      if(err){
        res.render('404', {errmsg: err.message});
      } else{
        //var json = JSON.parse(data);
        // var categoryData = json.body.category;
        // var category = [];
        // categoryData.forEach(function(item){
        //   var newItem = {
        //     "slug": item.slug,
        //     "name": item.name,
        //     "id" : item._id
        //   };
        //   if(!item._parent_id){
        //     category.push(newItem);
        //     //newItem["parent_id"] = item._parent_id;
        //   }
        // });
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
        res.setHeader("Content-Type", "text/javascript");
        res.send( data );
        //res.send("var sideBarData = " + JSON.stringify(category, null, 4) + ";");
      }
  });
}


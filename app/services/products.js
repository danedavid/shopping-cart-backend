const productModel = require('../models/products');

module.exports = function (callback) {
   productModel.find({}, {_id:false}, function(err,res) {
     callback(res);
   });
};

const productModel = require('../models/products');

module.exports = function (callback, minPrice, maxPrice, limit) {
  let criteria = {};
  let limitCriteria = 0;
  let priceCriteria = Object.assign(
    {},
    (minPrice)?{ $gte: parseInt(minPrice) }:{},
    (maxPrice)?{ $lte: parseInt(maxPrice) }:{}
  );
  if( minPrice || maxPrice ) { criteria.price = priceCriteria; }
  if(limit) { limitCriteria = parseInt(limit); }

  productModel.find(criteria, {_id:false}, {limit:limitCriteria}, callback);
};

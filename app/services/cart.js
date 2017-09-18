const cartModel = require('../models/cart');

module.exports = function(item, callback) {
  cartModel.findOneAndUpdate(
    { productID: item.productID },
    { $inc: { quantity: item.quantity }},
    { new: true },
    function(err, data) {
      if(data) {
        callback(err, data);
      } else {
        cartModel.create(item, callback);
      }
    }
  );
};

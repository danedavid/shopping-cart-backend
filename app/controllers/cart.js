const cartService = require('../services/cart');
const _ = require('lodash');

module.exports = function (req, res) {
  cartService(req.body.item, (err, data) => {
    if(err) { console.log("hello"); }
    res.status(200).json({
      status: 200,
      total: data.quantity,
      result: _.omit(data._doc, '_id')
    });
  });
};

const cartService = require('../services/cart');
const _ = require('lodash');

module.exports = function (req, res) {

  let typeError = false;
  if( !req.body.item ) typeError = true;
  if( !req.body.item.hasOwnProperty('productID') ) typeError = true;
  if( !req.body.item.hasOwnProperty('name') ) typeError = true;
  if( !req.body.item.hasOwnProperty('price') ) typeError = true;
  if( !req.body.item.hasOwnProperty('quantity') ) typeError = true;

  if( typeError ) {
    res.status(422).json({
      "status": 422,
      "error": "Invalid request"
    });
    return;
  }

  cartService(req.body.item, (err, data) => {
    if(err) {
      res.status(503).json({
        "status": 422,
        "error": "Invalid request"
      });
      return;
    }

    res.status(200).json({
      status: 200,
      total: data.quantity,
      result: _.omit(data._doc, '_id')
    });
  });
};

const productService = require('../services/products');

module.exports = function (req, res) {

  const minPrice = (req.query.min_price)?req.query.min_price: null;
  const maxPrice = (req.query.max_price)?req.query.max_price: null;
  const limit = (req.query.limit)?req.query.limit: null;

  let typeError = false;
  if( isNaN(minPrice) || isNaN(minPrice) || isNaN(minPrice) ) typeError = true;

  if(typeError) {
    res.status(422).json({
      "status": 422,
      "error": "Invalid Parameter types"
    });
    return;
  }

  productService( (err, data) => {
    if(err) {
      res.status(503).json({
        "status": 503,
        "error": "Database Error"
      });
      return;
    }
    res.status(200).json({
      "status": 200,
      "total": data.length,
      "result": data
    });
  }, minPrice, maxPrice, limit);
};

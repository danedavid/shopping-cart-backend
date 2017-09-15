const productService = require('../services/products');

module.exports = function (req, res) {

  const minPrice = (req.query.min_price)?req.query.min_price: null;
  const maxPrice = (req.query.max_price)?req.query.max_price: null;
  const limit = (req.query.limit)?req.query.limit: null;

  productService( (err, data) => {
    if(err) {}
    res.status(200).send({
      "status": 200,
      "total": data.length,
      "result": data
    });
  }, minPrice, maxPrice, limit);
};

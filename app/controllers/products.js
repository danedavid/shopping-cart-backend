const productService = require('../services/products');

module.exports = function (req, res) {
  productService((data)=>{
    res.status(200).send({
      "status": 200,
      "total": data.length,
      "result": data
    });
  });
};

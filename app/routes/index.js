const productController = require('../controllers/products');

module.exports = function (app) {
  app.get('/productListing', productController);
};

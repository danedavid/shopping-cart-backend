const productController = require('../controllers/products');
const cartController = require('../controllers/cart');

module.exports = function (app) {
  app.get('/productListing', productController);
  app.post('/add_to_cart', cartController);
};

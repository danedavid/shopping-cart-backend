const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productID: String,
  name: String,
  price: Number,
  quantity: Number
});

const productModel = mongoose.model('products',productSchema);
module.exports = productModel;

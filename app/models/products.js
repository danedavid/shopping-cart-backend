const mongoose = require('mongoose');
const productSchema = require('./schema');

const productModel = mongoose.model('products', productSchema);
module.exports = productModel;

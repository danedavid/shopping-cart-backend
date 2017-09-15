const mongoose = require('mongoose');
const productSchema = require('./schema');

const cartModel = mongoose.model('Model', productSchema,'cart');
module.exports = cartModel;

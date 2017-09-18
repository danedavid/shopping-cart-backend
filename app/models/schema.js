const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productID: String,
  name: String,
  price: Number,
  quantity: Number
}, {versionKey: false});

module.exports = productSchema;

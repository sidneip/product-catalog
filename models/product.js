var mongoose = require('mongoose');
var Category = require('./category');
var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean, default: true },
  attrs: [{
    name: { type: String, required: true },
    value: { type: String, required: true }
  }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  description: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);

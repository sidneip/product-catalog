var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean, default: true },
  attrs: [{
    name: { type: String, required: true },
    value: { type: String, required: true }
  }],
  description: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);

var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  name: { type: String, required: true }
  description: { type: String }
});

module.exports = mongoose.model('Category', CategorySchema);

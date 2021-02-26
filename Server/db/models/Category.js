const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const categorySchema = new Schema({
  title: String,
});

module.exports = model('category', categorySchema);

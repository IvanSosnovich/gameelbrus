
const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const resultSchema = new Schema({
  user: String,
  category: String,
  score: Number,
});

module.exports = model('result', resultSchema);

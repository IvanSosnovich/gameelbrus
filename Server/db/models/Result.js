
const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const resultSchema = new Schema({
  user: String,
  score: Number,
});

module.exports = model('result', resultSchema);

const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const questionSchema = new Schema({
  question: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },
  answer: String,
  price: Number
});

questionSchema.statics.mostRecent = async function () {
  return this.find().populate('category').limit(5).exec();
};

module.exports = model('question', questionSchema);

const { Schema, model, pluralize } = require('mongoose');

pluralize(null);

const questionSchema = new Schema({
  question: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category',
  },
  answer: String,
  price: Number,
  isChosen: Boolean,
});

questionSchema.statics.onlyThree = async function () {
  // return this.find({ isChosen: false }).populate('category').limit(3).exec();
  return this.find({ isChosen: false }).sort({ 'category': 1, 'price': 1 }).populate('category').limit(3).exec();


};

module.exports = model('question', questionSchema);

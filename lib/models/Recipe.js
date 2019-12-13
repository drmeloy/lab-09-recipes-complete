const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  measurement: {
    type: String,
    required: true
  }
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  directions: {
    type: [String]
  },
  ingredients: [ingredientsSchema]
});

schema.virtual('attempts', {
  ref: 'Attempt',
  localField: '_id',
  foreignField: 'recipeId'
});

module.exports = mongoose.model('Recipe', schema);

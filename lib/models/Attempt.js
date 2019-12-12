const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  dateOfAttempt: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});

schema.virtual('day')
  .get(function() {
    return this.dateOfAttempt.toDateString();
  })
  .set(function(val) {
    this.dateOfAttempt.setDate(val);
  });

schema.virtual('month')
  .get(function() {
    return this.dateOfAttempt.getMonth() + 1;
  })
  .set(function(val) {
    this.dateOfAttempt.setMonth(val - 1);
  });

schema.virtual('year')
  .get(function() {
    return this.dateOfAttempt.getFullYear();
  })
  .set(function(val) {
    this.dateOfAttempt.setFullYear(val);
  });

module.exports = mongoose.model('Attempt', schema);


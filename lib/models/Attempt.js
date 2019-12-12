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
  .set(function(day) {
    this.dateOfAttempt.setDate(day);
  });

// schema.virtual('month')
//   .get(funtcion() {

//   })
//   .set(function() {

//   });

// schema.virtual('year')
//   .get(function() {
    
//   })
//   .set(function() {

// });

module.exports = mongoose.model('Attempt', schema);


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
    switch (this.dateOfAttempt.getDay()) {
      case 0:
        return "Sunday";
        break;
      case 1:
        return "Monday";
        break;
      case 2:
         return "Tuesday";
        break;
      case 3:
        return "Wednesday";
        break;
      case 4:
        return "Thursday";
        break;
      case 5:
        return "Friday";
        break;
      case 6:
        return "Saturday";
    }
  })
  .set(function() {

  });

schema.virtual('month')
  .get(funtcion() {

  })
  .set(function() {

  });

schema.virtual('year')
  .get(function() {
    
  })
  .set(function() {

  });

module.exports = mongoose.model('Attempt', schema);


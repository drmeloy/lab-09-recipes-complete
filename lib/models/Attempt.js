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
    const dateNum = this.dateOfAttempt.getDate();
    let suffix;
    if(+dateNum.toString().split('').pop() === 1){
        suffix = 'st';
    }
    if(+dateNum.toString().split('').pop() === 2){
      suffix = 'nd';
    }
    if(+dateNum.toString().split('').pop() === 3){
      suffix = 'rd';
    }
    suffix ='th';
      
    switch (this.dateOfAttempt.getDay()) {
      case 0:
        return "This attempt happened Sunday the " + dateNum + suffix;
        break;
      case 1:
        return "This attempt happened Monday the " + dateNum;
        break;
      case 2:
         return "This attempt happened Tuesday the " + dateNum;
        break;
      case 3:
        return "This attempt happened Wednesday the " + dateNum;
        break;
      case 4:
        return "This attempt happened Thursday the " + dateNum;
        break;
      case 5:
        return "This attempt happened Friday the " + dateNum;
        break;
      case 6:
        return "This attempt happened Saturday the " + dateNum;
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


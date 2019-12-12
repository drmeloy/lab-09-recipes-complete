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
    suffix = 'th';

    const monthNum = this.dateOfAttempt.getMonth();
    let month;
    switch(monthNum){
      case 0:
        month = 'January';
        break;
      case 1:
        month = 'February';
        break;
      case 2:
        month = 'March';
        break;
      case 3:
        month = 'April';
        break;
      case 4:
        month = 'May';
        break;
      case 5:
        month = 'June';
        break;
      case 6:
        month = 'July';
        break;
      case 7:
        month = 'August';
        break;
      case 8:
        month = 'September';
        break;
      case 9:
        month = 'October';
        break;
      case 10:
        month = 'November';
        break;
      case 11:
        month = 'December';
        break;
    }

    const year = this.dateOfAttempt.getFullYear();
      
    switch(this.dateOfAttempt.getDay()) {
      case 0:
        return 'This attempt happened on Sunday the ' + dateNum + suffix + ' of ' + month + ', ' + year;
      case 1:
        return 'This attempt happened on Monday the ' + dateNum + suffix + ' of ' + month + ', ' + year;
      case 2:
        return 'This attempt happened on Tuesday the ' + dateNum + suffix + ' of ' + month + ', ' + year;
      case 3:
        return 'This attempt happened on Wednesday the ' + dateNum + suffix + ' of ' + month + ', ' + year;
      case 4:
        return 'This attempt happened on Thursday the ' + dateNum + suffix + ' of ' + month + ', ' + year;
      case 5:
        return 'This attempt happened on Friday the ' + dateNum + suffix + ' of ' + month + ', ' + year;
      case 6:
        return 'This attempt happened on Saturday the ' + dateNum + suffix + ' of ' + month + ', ' + year;
    }
  })
  .set(function() {

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


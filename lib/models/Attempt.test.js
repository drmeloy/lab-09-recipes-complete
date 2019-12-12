const mongoose = require('mongoose');
const Attempt = require('./Attempt');

describe('Attempt model', () => {
  it('has a required recipeId field', () => {
    const attempt = new Attempt({
      dateOfAttempt: 'December 5th, 2019',
      notes: 'Soooo good',
      rating: 5
    });

    const { errors } = attempt.validateSync();
    expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
  });

  it('has a required dateOfAttempt field', () => {
    const attempt = new Attempt({
      recipeId: 1,
      notes: 'Soooo good',
      rating: 5
    });

    const { errors } = attempt.validateSync();
    expect(errors.dateOfAttempt.message).toEqual('Path `dateOfAttempt` is required.');
  });

  it('has a required notes field', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: 'December 5th, 2019',
      rating: 5
    });

    const { errors } = attempt.validateSync();
    expect(errors.notes.message).toEqual('Path `notes` is required.');
  });

  it('has a required rating field', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: 'December 5th, 2019',
      notes: 'Soooo good'
    });

    const { errors } = attempt.validateSync();
    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });

  it('has a day get virtual', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: new Date('2019-12-12T00:00:00'),
      notes: 'Sooo goooood!',
      rating: 5
    });

    expect(attempt.day).toEqual('This attempt happened on Thursday the 12th of December, 2019');
  });
});

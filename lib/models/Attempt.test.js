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

    expect(attempt.day).toEqual('Thu Dec 12 2019');
  });

  it('has a day set virtual', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: new Date('2019-12-12T00:00:00'),
      notes: 'Sooo goooood!',
      rating: 5
    });

    attempt.day = 11;

    expect(attempt.day).toEqual('Wed Dec 11 2019');
  });

  it('has a month get virtual', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: new Date('2019-12-12T00:00:00'),
      notes: 'Sooo goooood!',
      rating: 5
    });

    expect(attempt.month).toEqual(12);
  });

  it('has a month set virtual', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: new Date('2019-12-12T00:00:00'),
      notes: 'Sooo goooood!',
      rating: 5
    });

    attempt.month = 11;

    expect(attempt.month).toEqual(11);
  });

  it('has a year get virtual', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: new Date('2019-12-12T00:00:00'),
      notes: 'Sooo goooood!',
      rating: 5
    });

    expect(attempt.year).toEqual(2019);
  });

  it('has a year set virtual', () => {
    const attempt = new Attempt({
      recipeId: 1,
      dateOfAttempt: new Date('2019-12-12T00:00:00'),
      notes: 'Sooo goooood!',
      rating: 5
    });

    attempt.year = 2018;

    expect(attempt.year).toEqual(2018);
  });
});

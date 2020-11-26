const chai = require('chai');
const accumulator = require('../src/accumulator');

const { expect } = chai;

describe('Accumulator', () => {
  it('should return correct response', async () => {
    const accumulatedTransactions = accumulator();
    const expected = [
      {
        merchantName: 'Netflix',
        amount: 6,
        currency: 'GBP',
        bookingDateTime: '2020-01-01T19:33:23.473Z',
        accumulated: 6
      },
      {
        merchantName: 'Petfood Co',
        amount: 15,
        currency: 'GBP',
        bookingDateTime: '2020-01-02T19:33:23.473Z',
        accumulated: 21
      },
      {
        merchantName: 'Google',
        amount: 4,
        currency: 'GBP',
        bookingDateTime: '2020-01-03T19:33:23.473Z',
        accumulated: 25
      }
    ];
    expect(accumulatedTransactions).to.deep.equal(expected);
  });
});





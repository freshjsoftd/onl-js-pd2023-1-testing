const assert = require('assert');

const {multiply, asyncSumm} = require('../operations');

describe('Math operations tests', () => {

  it('should multiply be equal expected', () => {
    const expected = 20;
    const result = multiply(3, 7);
    assert.equal(result, expected, `${result} not equal ${expected}`);
  });

  it('should async summ 2 numbers', (done) => {
    const expected = 20;
    asyncSumm(12, 8, (result) => {
      assert.equal(result, expected);
      done();
    })
  })
})

it('shold be match to Regexp', () => {
  const myString = 'Donic';
  assert.match(myString, /^S/, `String should be match to Regexp`);
})
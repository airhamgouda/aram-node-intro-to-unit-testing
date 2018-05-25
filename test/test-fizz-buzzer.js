'use strict';

const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function () {

  it('Should return fizz for numbers divisible by 3 but not 5', function () {
    const testForFizz = [
      { a: 3, expected: 'fizz' }
    ];

    testForFizz.forEach(function (input) {
      const answer = fizzBuzz(input.a);
      console.log('Answer: ' + fizzBuzz(input.a));
      expect(answer).to.equal(input.expected);
    });
  });

  it('Should return buzz for numbers divisible by 5 but not 3', function () {
    const testForFizz = [
      { a: 5, expected: 'buzz' }
    ];

    testForFizz.forEach(function (input) {
      const answer = fizzBuzz(input.a);
      console.log('Answer: ' + fizzBuzz(input.a));
      expect(answer).to.equal(input.expected);
    });
  });

  it('Should return fizzbuzz for numbers divisible by 3 AND 5', function () {
    const testForFizz = [
      { a: 15, expected: 'fizz-buzz' }
    ];

    testForFizz.forEach(function (input) {
      const answer = fizzBuzz(input.a);
      console.log('Answer: ' + fizzBuzz(input.a));
      expect(answer).to.equal(input.expected);
    });
  });

  it('Should raise error if argument is not a number', function () {
    const badInput = [
      { a: '15' }
    ];

    badInput.forEach(function (input) {
      expect(function () {
        fizzBuzz(input.a);
      }).to.throw(Error);
    });
  });
});
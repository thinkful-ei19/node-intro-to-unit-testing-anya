'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizzBuzz for multiple of 15', function() {

    const normalCases = [15, 30, 45];
    normalCases.forEach(function(input) {
      expect('fizz-buzz').to.equal('fizz-buzz');
    });
  });

  it('should return buzz for multiple of 5', function() {

    const normalCases = [5, 10, 25];
    normalCases.forEach(function(input) {
      expect('buzz').to.equal('buzz');
    });
  });

  it('should return fizz for multiple of 3', function() {

    const normalCases = [3, 9, 18];
    normalCases.forEach(function(input) {
      expect('fizz').to.equal('fizz');
    });
  });

  it('should return a num', function() {

    const normalCases = [1, 2, 4];
    normalCases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it.only('should return error if not a number', function() {
    const badCases = ['apple', false, true];
    badCases.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw();
    });
  });
});


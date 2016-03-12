'use strict';

let assert = require('assert'),
  primeFactorsResolver = require('../src/PrimeFactorsResolver');

describe('Prime Factors', () => {

  let getType = (object) => {
    return Object.prototype.toString.call(object).slice(8, -1);
  };

  describe('#instantiation', () => {
    it('should return an instance of Object', () => {
      let resolver = primeFactorsResolver();

      assert(getType(resolver) === 'Object', 'Is not instantiated');
    });
  });
});

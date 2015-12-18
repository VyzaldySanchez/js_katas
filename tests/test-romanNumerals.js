'use strict';

let assert = require('assert'),
    RomanNumerals = require('../src/RomanNumeralsConverter');

describe('RomanNumerals', function() {
    describe('#instantiation', function() {
        it('should instantiate the RomanNumeralsConverter object', function() {
            let romanConverter = RomanNumerals.Converter();

            assert(typeof romanConverter === 'object', 'Is not instantiated');
        });
    });

    describe('#convert()', function() {
        it('should return undefined for 0', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('undefined', romanConverter.convert(0));
        });

        it('should calculate the roman numeral for 1', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('I', romanConverter.convert(1));
        });

        it('should calculate the roman numeral for 2', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('II', romanConverter.convert(2));
        });

        it('should calculate the roman numeral for 3', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('III', romanConverter.convert(3));
        });

        it('should calculate the roman numeral for 4', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('IV', romanConverter.convert(4));
        });

        it('should calculate the roman numeral for 5', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('V', romanConverter.convert(5));
        });

        it('should calculate the roman numeral for 6', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('VI', romanConverter.convert(6));
        });

        it('should calculate the roman numeral for 8', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('VIII', romanConverter.convert(8));
        });

        it('should calculate the roman numeral for 9', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('IX', romanConverter.convert(9));
        });

        it('should calculate the roman numeral for 10', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('X', romanConverter.convert(10));
        });

        it('should calculate the roman numeral for 30', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('XXX', romanConverter.convert(30));
        });

        it('should calculate the roman numeral for 50', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('L', romanConverter.convert(50));
        });

        it('should calculate the roman numeral for 80', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('LXXX', romanConverter.convert(80));
        });

        it('should calculate the roman numeral for 90', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('XC', romanConverter.convert(90));
        });

        it('should calculate the roman numeral for 99', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('XCIX', romanConverter.convert(99));
        });

        it('should calculate the roman numeral for 115', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('CXV', romanConverter.convert(115));
        });

        it('should calculate the roman numeral for 450', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('CDL', romanConverter.convert(450));
        });

        it('should calculate the roman numeral for 700', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('DCC', romanConverter.convert(700));
        });

        it('should calculate the roman numeral for 930', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('CMXXX', romanConverter.convert(930));
        });

        it('should calculate the roman numeral for 1990', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('MCMXC', romanConverter.convert(1990));
        });

        it('should calculate the roman numeral for 2008', function() {
            let romanConverter = RomanNumerals.Converter();

            assert.equal('MMVIII', romanConverter.convert(2008));
        });
    });
});

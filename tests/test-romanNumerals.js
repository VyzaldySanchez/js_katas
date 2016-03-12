'use strict';

let assert = require('assert'),
    romanNumeralsConverter = require('../src/RomanNumeralsConverter');

describe('RomanNumerals', () => {
    describe('#instantiation', () => {
        it('should instantiate the romanNumeralsConverter object', function () {
            let romanConverter = romanNumeralsConverter();

            assert(typeof romanConverter === 'object', 'Is not instantiated');
        });
    });

    describe('#convert()', () => {
        it('should return undefined for 0', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('undefined', romanConverter.convert(0));
        });

        it('should calculate the roman numeral for 1', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('I', romanConverter.convert(1));
        });

        it('should calculate the roman numeral for 2', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('II', romanConverter.convert(2));
        });

        it('should calculate the roman numeral for 3', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('III', romanConverter.convert(3));
        });

        it('should calculate the roman numeral for 4', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('IV', romanConverter.convert(4));
        });

        it('should calculate the roman numeral for 5', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('V', romanConverter.convert(5));
        });

        it('should calculate the roman numeral for 6', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('VI', romanConverter.convert(6));
        });

        it('should calculate the roman numeral for 8', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('VIII', romanConverter.convert(8));
        });

        it('should calculate the roman numeral for 9', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('IX', romanConverter.convert(9));
        });

        it('should calculate the roman numeral for 10', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('X', romanConverter.convert(10));
        });

        it('should calculate the roman numeral for 30', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('XXX', romanConverter.convert(30));
        });

        it('should calculate the roman numeral for 50', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('L', romanConverter.convert(50));
        });

        it('should calculate the roman numeral for 80', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('LXXX', romanConverter.convert(80));
        });

        it('should calculate the roman numeral for 90', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('XC', romanConverter.convert(90));
        });

        it('should calculate the roman numeral for 99', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('XCIX', romanConverter.convert(99));
        });

        it('should calculate the roman numeral for 115', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('CXV', romanConverter.convert(115));
        });

        it('should calculate the roman numeral for 450', () => {
                let romanConverter = romanNumeralsConverter();

                assert.equal('CDL', romanConverter.convert(450));
            }
        )
        ;

        it('should calculate the roman numeral for 700', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('DCC', romanConverter.convert(700));
        });

        it('should calculate the roman numeral for 930', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('CMXXX', romanConverter.convert(930));
        });

        it('should calculate the roman numeral for 1990', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('MCMXC', romanConverter.convert(1990));
        });

        it('should calculate the roman numeral for 2008', () => {
            let romanConverter = romanNumeralsConverter();

            assert.equal('MMVIII', romanConverter.convert(2008));
        });
    });
});

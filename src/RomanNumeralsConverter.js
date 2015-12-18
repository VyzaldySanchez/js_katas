'use strict';

module.exports = {
    Converter: function() {
        let literalsDictionary = {
            'M': 1000,
            'CM': 900,
            'D': 500,
            'CD': 400,
            'C': 100,
            'XC': 90,
            'L': 50,
            'XL': 40,
            'X': 10,
            'IX': 9,
            'V': 5,
            'IV': 4,
            'I': 1
        };

        return Object.assign(Object.create(Object), {
            convert(number) {
                let romanLiteral = '';

                if (number < 1) {
                    return 'undefined';
                }

                for (var glyph in literalsDictionary) {
                    var limit = literalsDictionary[glyph];

                    while (number >= limit) {
                        romanLiteral += glyph;
                        number -= limit;
                    }
                }

                return romanLiteral;
            }
        });
    }
};

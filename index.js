const map = require('lodash/map');
const fromPairs = require('lodash/fromPairs');
const startsWith = require('lodash/startsWith');

const prefixNegativeModifiers = function (base, modifier) {
    return startsWith(modifier, '-') ? `-${base}-${modifier.slice(1)}` : `${base}-${modifier}`;
};

module.exports = function () {
    return ({ addUtilities, e, theme, variants }) => {
        const scale = theme('scale', {
            0: '0',
            25: '.25',
            50: '.5',
            75: '.75',
            100: '1'
        });

        const utilities = fromPairs(
            map(scale, (value, modifier) => {
                return [
                    `.${e(prefixNegativeModifiers('scale', modifier))}`,
                    {
                        transform: `scale(${value})`
                    }
                ];
            })
        );

        addUtilities(
            utilities,
            variants('scale', ['responsive', 'hover', 'focus'])
        );
    };
}

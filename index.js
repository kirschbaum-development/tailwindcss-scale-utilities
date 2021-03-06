const map = require('lodash/map');
const fromPairs = require('lodash/fromPairs');

module.exports = ({ addUtilities, e, theme, variants }) => {
    const scale = theme('scale', {
        0: '0',
        25: '.25',
        50: '.5',
        75: '.75',
        100: '1',
        110: '1.1'
    });

    const utilities = fromPairs(
        map(scale, (value, modifier) => {
            return [
                `.scale-${e(modifier)}`,
                {
                    transform: `scale(${value})`
                }
            ];
        })
    );

    addUtilities(
        utilities,
        variants('scale', ['hover'])
    );
};
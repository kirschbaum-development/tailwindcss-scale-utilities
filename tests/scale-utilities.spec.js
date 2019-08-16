const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

const generatePluginCss = (config) => {
    return postcss(
        tailwindcss(
            merge({
                theme: {
                    screens: {
                        'sm': '640px',
                    },
                },
                corePlugins: false,
                plugins: [
                  require('../index.js'),
                ],
            }, config)
        )
    )
    .process('@tailwind utilities', {
        from: undefined,
    })
    .then(result => {
        return result.css;
    });
};

expect.extend({
    toMatchCss: cssMatcher,
});

test('default scale utilities and variants are generated', () => {
    return generatePluginCss().then(css => {
        expect(css).toMatchCss(`
      .scale-0 {
        transform: scale(0);
      }
      .scale-25 {
        transform: scale(.25);
      }
      .scale-50 {
        transform: scale(.5);
      }
      .scale-75 {
        transform: scale(.75);
      }
      .scale-100 {
        transform: scale(1);
      }
      .scale-110 {
        transform: scale(1.1);
      }
      .hover\\:scale-0:hover {
        transform: scale(0);
      }
      .hover\\:scale-25:hover {
        transform: scale(.25);
      }
      .hover\\:scale-50:hover {
        transform: scale(.5);
      }
      .hover\\:scale-75:hover {
        transform: scale(.75);
      }
      .hover\\:scale-100:hover {
        transform: scale(1);
      }
      .hover\\:scale-110:hover {
        transform: scale(1.1);
      }
    `);
    });
});

test('scale utilities can be customized', () => {
    return generatePluginCss({
        theme: {
            scale: {
                '90': '0.9',
                '100': '1',
                '110': '1.1',
            }
        },
        variants: {
            scale: []
        },
    }).then(css => {
        expect(css).toMatchCss(`
      .scale-90 {
        transform: scale(0.9);
      }
      .scale-100 {
        transform: scale(1);
      }
      .scale-110 {
        transform: scale(1.1);
      }
    `);
    });
});

test('scale variants can be customized', () => {
    return generatePluginCss({
        theme: {},
        variants: {
            scale: ['group-hover']
        },
    }).then(css => {
        expect(css).toMatchCss(`
      .scale-0 {
        transform: scale(0);
      }
      .scale-25 {
        transform: scale(.25);
      }
      .scale-50 {
        transform: scale(.5);
      }
      .scale-75 {
        transform: scale(.75);
      }
      .scale-100 {
        transform: scale(1);
      }
      .scale-110 {
        transform: scale(1.1);
      }
      .group:hover .group-hover\\:scale-0 {
        transform: scale(0);
      }
      .group:hover .group-hover\\:scale-25 {
        transform: scale(.25);
      }
      .group:hover .group-hover\\:scale-50 {
        transform: scale(.5);
      }
      .group:hover .group-hover\\:scale-75 {
        transform: scale(.75);
      }
      .group:hover .group-hover\\:scale-100 {
        transform: scale(1);
      }
      .group:hover .group-hover\\:scale-110 {
        transform: scale(1.1);
      }
    `);
    });
});
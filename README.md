![](https://raw.githubusercontent.com/kirschbaum-development/tailwindcss-scale-utilities/dev/banner.png?token=AJHW5NJY5DEXJ3H7YZ4WUOS5MA3VC)

[![npm](https://img.shields.io/npm/v/@kirschbaum-development/tailwindcss-scale-utilities.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![npm](https://img.shields.io/npm/dt/@kirschbaum-development/tailwindcss-scale-utilities.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![tests](https://travis-ci.org/kirschbaum-development/tailwindcss-scale-utilities.svg?branch=master)](https://travis-ci.org/kirschbaum-development/tailwindcss-scale-utilities)

## Installation

```bash
yarn add @kirschbaum-development/tailwindcss-scale-utilities --dev
```

or

```bash
npm install @kirschbaum-development/tailwindcss-scale-utilities --save-dev
```

## Defaults

```js
theme: {
  scale: {
    0: 0,
    25: '.25',
    50: '.5',
    75: '.75',
    100: '1',
    110: '1.1'
  }
},
variants: {
  scale: ['hover']
}
```

## Usage

```js
// tailwind.config.js
{
  theme: {
    scale: {
      '60': '0.6',
      '90': '0.9',
      '100': '1',
      '120': '1.2'
    }
  },
  variants: {
    scale: ['responsive']
  },
  plugins: [
    require('tailwindcss-scale-utilities')
  ]
}
```

This plugin generates the following utilities:

```css
/* configurable with the "scale" theme object */
.scale-[key] {
  transform: scale([value]);
}
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email david@kirschbaumdevelopment.com or nathan@kirschbaumdevelopment.com instead of using the issue tracker.

## Credits

- [David VanScott](https://github.com/dvanscott)

## Sponsorship

Development of this package is sponsored by Kirschbaum Development Group, a developer driven company focused on problem solving, team building, and community. Learn more [about us](https://kirschbaumdevelopment.com) or [join us](https://careers.kirschbaumdevelopment.com)!

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
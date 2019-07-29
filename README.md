# Scale Utilities Plugin for Tailwind CSS

![](https://image.ibb.co/hgnwNx/logo.jpg)

[![npm](https://img.shields.io/npm/v/@kirschbaum-development/tailwindcss-scale-utilities.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![npm](https://img.shields.io/npm/dt/@kirschbaum-development/tailwindcss-scale-utilities.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![tests](https://travis-ci.org/kirschbaum-development/tailwindcss-scale-utilities.svg?branch=master)](https://travis-ci.org/kirschbaum-development/tailwindcss-scale-utilities)

## Installation

```bash
$ yarn add @kirschbaum-development/tailwindcss-scale-utilities --dev
```

or

```bash
$ npm install @kirschbaum-development/tailwindcss-scale-utilities --save-dev
```

## Usage

```js
// tailwind.config.js
{
  theme: {
    scale: { // defaults to { 0: 0, 25: '.25', 50: '.5', 75: '.75', 100: 1 }
      '90': '0.9',
      '100': '1',
      '110': '1.1'
    }
  },
  variants: { // defaults to ['responsive', 'hover', 'focus']
    scale: ['responsive']
  },
  plugins: [
    require('tailwindcss-scale-utilities')()
  ],
}
```

This plugin generates the following utilities:

```css
/* configurable with the "scale" theme object */
.scale-[key] {
  transform: scale([value]);
}
```
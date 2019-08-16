# Tailwind CSS Scale Utilities Plugin

[![npm](https://img.shields.io/npm/v/@kirschbaum-development/tailwindcss-scale-utilities.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![npm](https://img.shields.io/npm/dt/@kirschbaum-development/tailwindcss-scale-utilities.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://www.npmjs.com/package/@kirschbaum-development/tailwindcss-scale-utilities)

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
  scale: ['responsive', 'hover']
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
    require('tailwindcss-scale-utilities')()
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
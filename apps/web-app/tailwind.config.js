/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');
const colors = require('../../libs/ui/styles/colors');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, './**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      xs: ['0.625rem', '16px'],
      sm: ['0.75rem', '18px'],
      base: ['0.875rem', '24px'],
      lg: ['1rem', '24px'],
      xl: ['1.125rem', '24px'],
      '2xl': ['1.5rem', '32px'],
      '3xl': ['2rem', '48px'],
      '4xl': ['2.75rem', '48px']
    },
    dropShadow: {
      'elevation-02': '0px 1px 2px rgba(0, 0, 0, 0.1)',
      'elevation-03': '0px 4px 8px rgba(0, 0, 0, 0.1)',
      'elevation-04': '0px 6px 12px rgba(0, 0, 0, 0.1)',
      'elevation-05': '0px 8px 16px rgba(0, 0, 0, 0.1)',
      'elevation-06': '0px 10px 24px rgba(0, 0, 0, 0.1)'
    },
    extend: {
      colors
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
  presets: [require('../../tailwind-workspace-preset.js')],
}

/** @type {import('tailwindcss').Config} */

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');
const { join } = require('path');
const colors = require('./styles/colors');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
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
      'elevation-02': '0px 8px 16px rgba(75, 85, 101, 0.08)',
      'elevation-03': '0px 16px 32px rgba(75, 85, 101, 0.08)',
      'elevation-04': '0px 20px 40px rgba(75, 85, 101, 0.08)',
      'elevation-05': '0px 24px 48px rgba(75, 85, 101, 0.08)'
    },
    extend: {
      colors,
      keyframes: {
        shimmer: {
          '0%': {
            backgroundColor: '#EDEFF5',
            opacity: '30%'
          },
          '100%': {
            backgroundColor: '#EDEFF5',
            opacity: '100%'
          }
        }
      },
      animation: {
        shimmer: 'shimmer 1s linear infinite alternate',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
  presets: [require('../../tailwind-workspace-preset.js')],
}

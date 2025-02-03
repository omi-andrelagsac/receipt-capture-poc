import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
        fontFamily: {
          sans: ['Henry Sans']
        },
        fontWeight: {
          semibold: '600'
        },
        colors: {
          'sm-primary': '#0030FF',
          'sm-electric-blue': '#0030FF',
          'sm-white': '#FFFFFF',
          'sm-secondary-green': '#98DAD0',
          'sm-secondary-yellow': '#FFDB00',
          'sm-secondary-pink': '#FF96A9',
          'sm-secondary-azure': '#96AAFF',
          'sm-secondary-red': '#FF0000',
          'sm-accent-green-dark': '#246C63',
          'sm-accent-green-light': '#B4F2DF',
          'sm-accent-yellow-dark': '#E89B12',
          'sm-accent-yellow-light': '#FEF7B4',
          'sm-accent-pink-dark': '#C15669',
          'sm-accent-pink-light': '#FFD0D6',
          'sm-accent-azure-dark': '#6051E3',
          'sm-accent-azure-light': '#ACCAFF',
          'sm-default-text': '#2B3039',
          'sm-title-text': '#002972',
          'sm-body': '#494E56',
          'sm-placeholder': '#494E56',
          'sm-inactive': '#BEBEBE',
          'sm-border': '#CED3DD',
          'sm-light-border': '#E8EAEE',
          'sm-disabled': '#F1F2F3',
          'sm-light-background': '#F4F8FF',
          'sm-link': '#247CFF',
          'sm-info': '#247CFF',
          'sm-error': '#EC5D77',
          'sm-success': '#00C6A2',
          'sm-warning': '#E7AF3A',
          'sm-ice': '#FEFEFE',
          'sm-system': '#747C8C',
          'sm-cool-gray': '#747C8C',
          'sm-black': '#000000',
          'sm-cold': '#DCE4FF',
          'sm-breeze': '#DEF8FA',
          'sm-cyan-blue': '#F5F8FE',
          'sm-cylindrical': '#DEF8FA',
          'sm-cylindrical-coordinate': '#B896FF',
          'sm-error-secondary': '#FEE4ED'
      }
    }
  },

  plugins: [typography, forms, containerQueries]
} satisfies Config;

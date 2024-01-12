import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rumah-peran-red': '#952f1f',
        'soft-black': '#010101',
        'soft-cream': '#FFF2D1',
        'bright-yellow': '#F7CA17',
      },
      animation: {
        'text-slide': 'text-slide 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 40%': {
            transform: 'translateY(0%)',
          },
          '50%, 90%': {
            transform: 'translateY(-33.33%)',
          },
          '100%': {
            transform: 'translateY(-66.66%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

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
      },
    },
  },
  plugins: [],
};
export default config;

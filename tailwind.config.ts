import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        amber: '#F4B300',
        amethyst: '#80387B',
        emerald: '#298A34',
        ruby: '#D2082F',
        sapphire: '#0089C3',
        steel: '#9FA9B3'
      }
    }
  },
  plugins: []
};
export default config;

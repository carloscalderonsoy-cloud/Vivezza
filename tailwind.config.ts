import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink:    '#0F1623',
        paper:  '#FFFFFF',
        stone:  '#F0F4FA',
        muted:  '#6B7A99',
        clinic: '#1B5FBE',
      },
    },
  },
  plugins: [],
}

export default config

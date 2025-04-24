/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import colors from 'tailwindcss/colors'
import light from 'daisyui/src/theming/themes'

const config: Config = {
  content: [
    './sections/**/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [daisyui],
  theme: {
    colors: {
      ...colors,
      whatsapp: '#25d366',
    },
  },
  daisyui: {
    themes: [{ light: { ...light.light, primary: '#2f7a2f' } }],
  },
}
export default config

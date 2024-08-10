import type { Config } from "tailwindcss";




const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      pop: ['Mochiy Pop One', 'sans-serif'],
    },
    colors: {
      'main-red':'#B21D15',
      'main-green':'#185029',
      'main-white':'#ffffff',
      'main-yellow':'#D7BF1C',
      'main-black':'#000000',
    }
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;

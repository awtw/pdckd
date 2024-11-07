/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
        customLightBlue: '#dbeafe', // 添加自定義淺藍色
        customBlue: '#3b82f6', // 添加自定義藍色
        customDarkBlue: '#1d4ed8', // 添加自定義深藍色
        customLightGreen: '#e6fffa', // 添加自定義淺綠色
        customGreen: '#10b981', // 添加自定義綠色
        customDarkGreen: '#065f46', // 添加自定義深綠色
        customLightYellow: '#fef9c3', // 添加自定義淺黃色
        customYellow: '#facc15', // 添加自定義黃色
        customDarkYellow: '#ca8a04', // 添加自定義深黃色
        customLightPink: '#fce7f3', // 添加自定義淺粉色
        customPink: '#ec4899', // 添加自定義粉色
        customDarkPink: '#be185d', // 添加自定義深粉色
        customLightGray: '#f3f4f6', // 添加自定義淺灰色
        customHeader: '#F6F5F2', // 添加自定義 Header 背景色
        customSimulation: '#F0EBE3', // 添加自定義 Simulation 背景色
        customCalculation: '#F3D0D7', // 添加自定義 Calculation 背景色
        customGeneAnalysis: '#FFEFEF', // 添加自定義 Gene Analysis 背景色
      }
    },
    fontFamily: {
      'body': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter', 
    'ui-sans-serif', 
    'system-ui', 
    '-apple-system', 
    'system-ui', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'Noto Sans', 
    'sans-serif', 
    'Apple Color Emoji', 
    'Segoe UI Emoji', 
    'Segoe UI Symbol', 
    'Noto Color Emoji'
  ]
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      17: '4.3rem',
      20: '4.5rem',
      25: '5rem',
      26: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


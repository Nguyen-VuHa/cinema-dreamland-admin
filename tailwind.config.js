/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Thêm các file TS và TSX
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth-layout': `url('../public/background-cinema.jpg')`,
      },
      colors: {
        'layout-primary': '#1a191f',
        'layout-second': '#222028',
        'primary': '#f9ab00',
        'input-place': '#a7a4aa',
        'hover': '#f9ab000d',
        'info': '#17b6dd',
        'error': '#ef4444',
        'warning': '#f97316',
        'success': '#22c55e',
        'white': '#fff',
      },
      borderWidth: { 
        '1': '1px',
      },
      fontSize: { 
        'menu': '0.875rem',
      }
    },
  },
  plugins: [],
}


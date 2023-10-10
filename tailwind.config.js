/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      backgroundImage: {
        'stardew-valley': "url('/public/img/game/IMG_0598.jpg')",
      },
    },
  },
}

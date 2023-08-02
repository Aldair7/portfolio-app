/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      fontFamily: {
	  sans: ['Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
	  heading: ['Ubuntu', 'Arial', 'sans-serif'],
	  },
    extend: {
      backgroundImage: {
	'back-gr': "url('1.svg')",
	'second-img': "url('2.svg')",
	'third-img': "url('3.svg')",
	'forth-img': "url('4.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
	sunglo: "#E36A6E",
	ebony: "#293143",
	amar: "#E3E181",
      },
    },
  },
   plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
}

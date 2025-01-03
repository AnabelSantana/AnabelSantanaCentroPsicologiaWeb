/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				playFair: ["Playfair", 'serif'],
				merriweather: ['Merriweather', 'serif'],
				lora: ['Lora', 'serif']
			},
			colors: {
				background: '#F2F2F2',
				corporate: '#0D7061',
				secondary: '#8fc1b5',
				terciary: '#C0DFD7',
				beige: '#FFF9F2', 
                targetBorder: '#B35C2E',
                targetText: '#4F4F4F'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				fadeIn: 'fadeIn 2s ease-out',
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow': {
					'text-shadow': '0 35px 60px 30px rgba(147, 240, 244, 0.3)',
				},
				'.text-shadow-md': {
					'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.5)',
				},
				'.text-shadow-lg': {
					'text-shadow': '4px 4px 8px rgba(0, 0, 0, 0.9)',
				},
			});
		}
	],
}

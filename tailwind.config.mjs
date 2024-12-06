/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				playFair: [ "Playfair", 'serif'],
				merriweather: ['Merriweather', 'serif'],
				lora: ['Lora', 'serif']
			},
			colors: {
				background: '#F2F2F2',
				corporate: '#0D7061'
			}
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow': {
					'text-shadow': '0 35px 60px 30px rgba(147, 240, 244, 0.3)',
				},
				'.text-shadow-md': {
					'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.5)',
				},
				'.text-shadow-lg': {
					'text-shadow': '4px 4px 8px rgba(51, 250, 245, 0.9)',
				},
			});
		}
	],
}

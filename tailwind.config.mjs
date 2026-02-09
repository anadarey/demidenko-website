/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Основной текст (Montserrat)
				sans: ['Montserrat', 'sans-serif'],
				// Заголовки (Cormorant Garamond - тот самый красивый шрифт)
				serif: ['Cormorant Garamond', 'serif'],
			},
			colors: {
				amber: {
					450: '#D69E2E',
				},
				slate: {
					850: '#151e2e', 
					950: '#020617',
				}
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'fade-in': 'fadeIn 1.2s ease-out forwards',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				}
			}
		},
	},
	plugins: [],
}

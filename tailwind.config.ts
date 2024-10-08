import type { Config } from 'tailwindcss';
import Typo from '@tailwindcss/typography'
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
	content: {
		files: ['./src/**/*.{html,js,svelte,ts}'],
		extract
	},
	theme: {
		screens,
		fontSize,
		fontFamily: {
			'display': ['Mango'],
			'body': ["Nohemi"],
		},

		extend: {
			container: {
				center: true,
				padding: '1rem',
			},
			colors: {
				primary: '#EB3678',
				'primary-background': '#102C57',
				secondary: '#FB773C',
				'secondary-background': 'rgba(0, 111, 145, 0.40)',
				'muted': '#FFCBCB'
			},
			borderRadius: {
				DEFAULT: '0.75rem'
			},

		}
	},

	plugins: [Typo, fluid]
} as Config;

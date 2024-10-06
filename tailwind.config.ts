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
		}
	},

	plugins: [Typo, fluid]
} as Config;

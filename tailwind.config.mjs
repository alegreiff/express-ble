/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		'border-b-bleVerde-claro',
		'border-t-bleVerde-claro',
		'border-b-bleColor-dorado',
		'border-t-bleColor-dorado',
		'border-b-bleColor-verde',
		'border-t-bleColor-verde',
		'border-b-bleColor-dorado1',
		'border-t-bleColor-dorado1',
		'border-b-bleColor-verde1',
		'border-t-bleColor-verde1',
		'hover:bg-bleColor-dorado',
		'hover:bg-bleColor-dorado1',
		'hover:bg-bleColor-verde',
		'hover:bg-bleColor-verde1',
		'bg-bleColor-dorado',
		'bg-bleColor-dorado1',
		'bg-bleColor-verde',
		'bg-bleColor-verde1',
		'text-bleNegro',
		'text-bleBlanco',
		'text-bleGris',
	],
	theme: {
		debugScreens: {
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
				fontSize: "1.5rem",
      },
    },
		

		extend: {
			screens: {
				/* mini: { max: '639px' },
				tablet: {'min': '640px', 'max': '1279px'},
				xl: {'min': '1280px', 'max': '1639px'}, */
				big: { min: '1640px' },
				
			},
			colors: {
			
				jaime: {
					captureble: "#295285",
					cmyk: "#104779",
					test2: "rgb(29,52,85)",
					test3: "rgb(41,82,133)",
					test4: "rgb(50,77,122)",
					test5: "##045484",
				},
				bleAzul: {
					DEFAULT: "#045484",
					claro: "#5171b1",
					oscuro: "#111825",
				},
				bleColor : {
					verde: "#6f957b",
					verde1: "#b2c2bf",
					dorado: "#b2c2bf",
					dorado3: "#f2a714",

					dorado1: "#ffcf40",
					dorado2: "#ffdc73"
				},
				bleAzul2: {
					DEFAULT: "#22487a",
					claro: "#3a77c8",
					oscuro: "#0c192a",
				},
				bleVerde: {
					DEFAULT: "#4c6c30",
					claro: "#7eb151",
					/* claro: '#ffbf43', */
					oscuro: "#1a2511",
	
				},
				bleGris: "#707D8C",
				bleBlanco: "#F5F7FA",
				bleNegro: "#1A1D21",
				
			},
			
		},
	},
	plugins: [
		require('daisyui'),
		require('tailwindcss-debug-screens'),

	],
}

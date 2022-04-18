module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			"inter-serif": ["Inter", "sans-serif"],
		},
		extend: {
			colors: {
				"primary-blue": "#00A1E1",
				"secondary-blue": "#62E0F6",
				"primary-teal": "#CAFCFD",
				"green-tea": "#AFE375",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};

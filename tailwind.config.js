module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			"inter-serif": ["Inter", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"cta-pattern": 'url("./assets/img/bg-section.svg")',
				"gradient-radial-to-tr":
					"radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
				"gradient-radial-to-tl":
					"radial-gradient(55% 10% at 100% 100%, var(--tw-gradient-stops))",
				"gradient-radial-to-br":
					"radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
				"gradient-radial-to-bl":
					"radial-gradient(75% 45% at 100% 0%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-blue": "#00A1E1",
				"secondary-blue": "#002854",
				"primary-teal": "#CAFCFD",
				"green-tea": "#AFE375",
				"orange-juice": "#FF9410",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};

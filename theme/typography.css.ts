import { styleVariants } from "@vanilla-extract/css"

import { responsiveStyle } from "@/helpers/responsive"

export const typographyObject = {
	title: {
		h1: {
			fontFamily: "PP Object Sans",
			fontWeight: "500",
			lineHeight: "36px",
			fontSize: "32px",
			letterSpacing: "-0.02em",
			textDecoration: "none",

			...responsiveStyle({
				tablet: {
					fontSize: "60px",
				},
				mobile: {
					fontWeight: "500",
					fontSize: "45px",
				},
			}),
		},
		h2: {
			fontFamily: "PP Object Sans",
			fontWeight: "500",
			lineHeight: "28px",
			fontSize: "26px",
			letterSpacing: "-0.02em",
			textDecoration: "none",

			...responsiveStyle({
				tablet: {
					fontSize: "22px",
				},
				mobile: {
					fontSize: "18px",
				},
			}),
		},
		h3: {
			fontFamily: "PP Object Sans",
			fontWeight: "500",
			lineHeight: "24px",
			fontSize: "20px",
			letterSpacing: "-0.03em",
			textDecoration: "none",
		},
		h4: {
			fontFamily: "PP Object Sans",
			fontWeight: "400",
			lineHeight: "24px",
			fontSize: "20px",
			letterSpacing: "-0.03em",
			textDecoration: "none",
		},
	},
	button: {
		big: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "24px",
			fontSize: "18px",
			letterSpacing: "-0.03em",
			textDecoration: "none",
		},
		small: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "16px",
			fontSize: "13px",
			letterSpacing: "-0.02em",
			textDecoration: "none",
		},
	},
	paragraph: {
		regular: {
			fontFamily: "Inter",
			fontWeight: "400",
			lineHeight: "24px",
			fontSize: "17px",
			letterSpacing: "-0.012em",
			textDecoration: "none",
		},
		medium: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "24px",
			fontSize: "17px",
			letterSpacing: "-0.012em",
			textDecoration: "none",
		},
	},
	caption: {
		regular: {
			fontFamily: "Inter",
			fontWeight: "400",
			lineHeight: "16px",
			fontSize: "13px",
			letterSpacing: "-0.02em",
			textDecoration: "none",

		},
		medium: {
			fontFamily: "Inter",
			fontWeight: "500",
			lineHeight: "16px",
			fontSize: "13px",
			letterSpacing: "-0.02em",
			textDecoration: "none",
		},
	},
} as const

export default {
	title: styleVariants(typographyObject.title),
	button: styleVariants(typographyObject.button),
	paragraph: styleVariants(typographyObject.paragraph),
	caption: styleVariants(typographyObject.caption),
} as const

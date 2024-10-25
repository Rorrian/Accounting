import { ComplexStyleRule, style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { Size } from "./Logo"

type LogoVariantsType = {
	size: Record<Size, ComplexStyleRule | string>
}

const logoContainer = recipe<LogoVariantsType>(
	{
		base: {
			height: "auto",
		},
		variants: {
			size: {
				big: { maxWidth: "20vw" },
				small: { maxWidth: "10vw" },
			},
		},
		defaultVariants: {
			size: "big",
		},
	},
	"logoContainer"
)

const icon = style(
	{
		width: "100%",
		height: "auto",
		color: "white",
	},
	"icon"
)

export const logoStyles = {
	logoContainer,
	icon,
}
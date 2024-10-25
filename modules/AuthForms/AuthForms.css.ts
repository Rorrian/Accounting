import { style } from "@vanilla-extract/css"

const formBox = style(
	{
		position: "relative",
		width: "100%",
		height: "100%",
	},
	"formBox"
)

const formWrapper = style(
	{
		position: "absolute",
		width: "100%",
		height: "100%",
	},
	"formWrapper"
)

const form = style(
	{
		height: "100%",
	},
	"form"
)

export const authFormStyles = {
	formBox,
	formWrapper,
	form,
}

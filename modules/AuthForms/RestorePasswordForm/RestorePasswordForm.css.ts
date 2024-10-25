import { flexCentered, flexColumn } from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"
import { style } from "@vanilla-extract/css"

const form = style(
	[
		flexColumn,
		flexCentered,
		{
			gap: vars.spaces.md,
		},
	],
	"form"
)

export const restorePasswordFormStyles = {
	form,
}

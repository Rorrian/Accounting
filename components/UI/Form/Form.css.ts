import { flexCentered, flexColumn, flexRow } from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"
import { style } from "@vanilla-extract/css"

const form = style(
	[
		flexColumn,
		flexCentered,
		{
			gap: vars.spaces.md,
			padding: vars.spaces.md,
		},
	],
	"form"
)

const middle = style(
	[
		flexColumn,
		flexCentered,
		{
			gap: vars.spaces.sm,
		},
	],
	"middle"
)

const bottom = style(
	[
		flexRow,
		flexCentered,
		{
			gap: vars.spaces.sm,
			marginTop: vars.spaces.lg,
		},
	],
	"bottom"
)

export const formStyles = {
	form,
	middle,
	bottom,
}
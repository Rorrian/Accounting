import { style } from "@vanilla-extract/css"

import { flexCentered, flexColumn, flexRow } from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"
import typographyCss from "@/theme/typography.css"

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

const recaptcha = style(
	{
		marginTop: vars.spaces.sm,
		marginBottom: vars.spaces.sm,
		filter: `${vars.themeVariables.filter} grayscale(1)`,
		transform: 'scale(1.1)',
		
		// TODO: Решить проблему с разницей transition
		transition: `filter ${vars.transition}`,
	},
	"recaptcha"
)

const caption = style(
	[
		typographyCss.caption.regular,
		{
			color: vars.themeVariables.content.primary,
			transition: `color ${vars.transition}`,
		},
	],
	"caption"
)

const link = style(
	{
		color: vars.content.link,
	},
	"link"
)

export const formStyles = {
	form,
	middle,
	bottom,
	recaptcha,
	caption,
	link,
}


import { checkboxStyles } from "./Checkbox.css"

interface CheckboxProps {
	disabled?: boolean
	isChecked?: boolean
	label?: React.ReactNode
	onChange?(): React.ChangeEventHandler<HTMLInputElement>
	// TODO: Стоит ли объединять радио кнопку с чекбоксом?
	// radio?: RadioLink
}

const Checkbox = ({
	disabled = false,
	isChecked,
	label,
	onChange,
}: CheckboxProps) => (
	<label className={checkboxStyles.checkboxWrapper}>
		<input
			type="checkbox"
			disabled={disabled}
			className={
				className
			)}
			{...props}
		>
			{children}
		</input>
	</label>
)

export default Checkbox

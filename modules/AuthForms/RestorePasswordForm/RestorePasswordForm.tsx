"use client"

import { FormProvider, useForm } from "react-hook-form"

import { Button } from "@/components/UI/Button/Button"
import { TextField } from "@/components/UI/InputBoxes/TextField/TextField"
import { Title } from "@/components/UI/Title/Title"
import { formStyles } from "@/components/UI/Form/Form.css"
import typographyCss from "@/theme/typography.css"
import { Kind, Size } from "@/types/components/button/enums"
import { useAuthForm } from "@/hooks/useAuthForm"

import { Form } from "../../../components/UI/Form/Form"
import { getErrorMessage } from "@/helpers/common"
import { VALIDATION_MESSAGES } from "@/helpers/constants"

interface RestorePasswordFormProps {
	className?: string
	onSignIn(): void
}

export const RestorePasswordForm = ({
	className,
	onSignIn,
}: RestorePasswordFormProps) => {
	const formMethods = useForm()
	const { handleSubmit, isLoading, onSubmit, errors, register } = useAuthForm('password-reset')

	return (
		<FormProvider {...formMethods}>
			<Form
				className={className}
				id="restorePasswordForm"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Title headingType="h2">Restore password</Title>

				<TextField
					errorMessage={getErrorMessage(errors?.email)}
					isValid={!errors.email}
					type="email"
					placeholder="Email Address"
					{...register('email', {
						required: VALIDATION_MESSAGES.email.required,
					 })}
				/>

				<Button
					disabled={isLoading}
					kind={Kind.Secondary}
					title={isLoading ? 'Loading...' : "Send email to reset password"}
					type="submit"
				/>

				<div className={formStyles.bottom}>
					<p className={typographyCss.caption.regular}>
						Remember your password?
					</p>
					<Button
						kind={Kind.Secondary}
						size={Size.Small}
						title="Sign in"
						onClick={() => onSignIn()}
					/>
				</div>
			</Form>
		</FormProvider>
	)
}
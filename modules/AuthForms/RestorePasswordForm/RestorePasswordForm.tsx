"use client"

import { FormProvider, useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha"

import { Button } from "@/components/UI/Button/Button"
import { TextField } from "@/components/UI/InputBoxes/TextField/TextField"
import { Title } from "@/components/UI/Title/Title"
import { formStyles } from "@/components/UI/Form/Form.css"
import typographyCss from "@/theme/typography.css"
import { Kind, Size } from "@/types/components/button/enums"
import { useAuthForm } from "@/hooks/useAuthForm"
import { getErrorMessage } from "@/helpers/common"
import { AuthTypes, VALIDATION_MESSAGES } from "@/helpers/constants"

import { Form } from "../../../components/UI/Form/Form"

interface RestorePasswordFormProps {
	className?: string
	onSignIn(): void
}

	// TODO: восстановление пароля через письмо на почте
	// TODO: форма для ввода нового пароля

export const RestorePasswordForm = ({
	className,
	onSignIn,
}: RestorePasswordFormProps) => {
	const formMethods = useForm()
	const {
		errors,
		handleSubmit,
		isLoading,
		recaptchaRef,
		onSubmit,
		register
	} = useAuthForm(AuthTypes.RestorePassword)

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
			
			{/* FIXME: нужна ли ? */}
				<ReCAPTCHA
					ref={recaptchaRef}
					size="normal"
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					theme="light"
					className={formStyles.recaptcha}
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

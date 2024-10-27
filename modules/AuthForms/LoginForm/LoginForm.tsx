"use client"

import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"
import ReCAPTCHA from 'react-google-recaptcha'

import { Button } from "@/components/UI/Button/Button"
import { Title } from "@/components/UI/Title/Title"
import { formStyles } from "@/components/UI/Form/Form.css"
import { Kind, Size } from "@/types/components/button/enums"
import { useAuthForm } from "@/hooks/useAuthForm"
import { AuthTypes, VALIDATION_MESSAGES } from "@/helpers/constants"
import { getErrorMessage } from "@/helpers/common"
import { FormTextField } from "@/components/UI/InputBoxes/FormTextField/FormTextField"

import { Form } from "../../../components/UI/Form/Form"
import { SocialMediaButtons } from "../SocialMediaButtons/SocialMediaButtons"

interface LoginFormProps {
	className?: string
	onSignUp(): void
	onRestorePassword(): void
}

export const LoginForm = ({
	className,
	onSignUp,
	onRestorePassword,
}: LoginFormProps) => {
	const formMethods = useForm()
	const {
		errors,
		handleSubmit,
		isLoading,
		recaptchaRef,
		onSubmit,
		register
	} = useAuthForm(AuthTypes.Login)

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	return (
		<FormProvider {...formMethods}>
			<Form
				className={className}
				id="loginForm"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Title headingType="h2">Sign in</Title>

				<FormTextField
          type="email"
          placeholder="Email Address"
          register={register}
          validation={{
						name: 'email',
						rules: {
							required: VALIDATION_MESSAGES.email.required
						}
					}}
          errorMessage={getErrorMessage(errors?.email)}
        />

        <FormTextField
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          register={register}
          validation={{
						name: 'password',
						rules: {
							required: VALIDATION_MESSAGES.password.required
						}
					}}
					showPasswordToggle
					toggleVisibility={togglePasswordVisibility}
					errorMessage={getErrorMessage(errors?.password)}
        />

				<ReCAPTCHA
					ref={recaptchaRef}
					size="normal"
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					theme="light"
					className={formStyles.recaptcha}
				/>

				<Button
					kind={Kind.Transparent}
					size={Size.Small}
					title="Forgot password?"
					onClick={() => onRestorePassword()}
				/>

				<div className={formStyles.middle}>
					<Button
						disabled={isLoading}
						kind={Kind.Secondary}
						title={isLoading ? 'Loading...' : "Sign in"}
						type="submit"
					/>

					<SocialMediaButtons />
				</div>

				<div className={formStyles.bottom}>
					<p className={formStyles.caption}>
						New to the BudgetBuddy?
					</p>
					<Button
						kind={Kind.Secondary}
						size={Size.Small}
						title="Sign Up"
						onClick={() => onSignUp()}
					/>
				</div>
			</Form>
		</FormProvider>
	)
}

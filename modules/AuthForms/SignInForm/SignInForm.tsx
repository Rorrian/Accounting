"use client"

import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"

import { Button } from "@/components/UI/Button/Button"
import { TextField } from "@/components/UI/InputBoxes/TextField/TextField"
import { Title } from "@/components/UI/Title/Title"
import { formStyles } from "@/components/UI/Form/Form.css"
import typographyCss from "@/theme/typography.css"
import { Kind, Size } from "@/types/components/button/enums"
import { useAuthForm } from "@/hooks/useAuthForm"
import { VALIDATION_MESSAGES } from "@/helpers/constants"
import { getErrorMessage } from "@/helpers/common"
import { FormTextField } from "@/components/UI/InputBoxes/FormTextField/FormTextField"

import { Form } from "../../../components/UI/Form/Form"
import { validationRules } from "../RegisterForm/validationRules"

interface SignInFormProps {
	className?: string
	onRestorePassword(): void
	onSignUp(): void
}

export const SignInForm = ({
	className,
	onRestorePassword,
	onSignUp,
}: SignInFormProps) => {
	const formMethods = useForm()
	const { handleSubmit, isLoading, onSubmit, errors, register } = useAuthForm('login')

	const signInWithGoogleHandler = () => {}

	const [showPassword, setShowPassword] = useState(false);
	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

	return (
		<FormProvider {...formMethods}>
			<Form
				className={className}
				id="signInForm"
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

					<p className={typographyCss.caption.regular}>or</p>

					<Button
						kind={Kind.Secondary}
						size={Size.Small}
						title="Sign in WIth Google"
						onClick={signInWithGoogleHandler}
					/>
				</div>

				<div className={formStyles.bottom}>
					<p className={typographyCss.caption.regular}>
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

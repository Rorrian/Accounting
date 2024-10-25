"use client"

import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"

import { Button } from "@/components/UI/Button/Button"
import { Title } from "@/components/UI/Title/Title"
import { formStyles } from "@/components/UI/Form/Form.css"
import typographyCss from "@/theme/typography.css"
import { Kind, Size } from "@/types/components/button/enums"
import { useAuthForm } from "@/hooks/useAuthForm"
import { getErrorMessage } from "@/helpers/common"
import { FormTextField } from "@/components/UI/InputBoxes/FormTextField/FormTextField"
import { RegisterFormData } from "@/types/commonTypes"

import { Form } from "../../../components/UI/Form/Form"
import { validationRules } from "./validationRules"

interface RegisterFormProps {
	className?: string
	onSignIn(): void
}

export const RegisterForm = ({ className, onSignIn }: RegisterFormProps) => {
	const formMethods = useForm()

	const { handleSubmit, isLoading, onSubmit, errors, register, watch } = useAuthForm('register')
	const password = watch("password");
	
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
	const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

	const handleFormSubmit = (data: RegisterFormData) => {
		const { confirmPassword, ...submitData } = data;
		onSubmit(submitData);
	};

	return (
		<FormProvider {...formMethods}>
			<Form
				className={className}
				id="registerForm"
				onSubmit={handleSubmit(handleFormSubmit)}
			>
				<Title headingType="h2">Sign up</Title>
				<p className={typographyCss.caption.regular}>Welcome to BudgetBuddy!</p>

				<FormTextField
          type="text"
          placeholder="Username"
          register={register}
          validation={{
						name: 'name',
						rules: validationRules.username
					}}
          errorMessage={getErrorMessage(errors?.name)}
        />

				<FormTextField
          type="email"
          placeholder="Email Address"
          register={register}
          validation={{
						name: 'email', rules:
						validationRules.email
					}}
          errorMessage={getErrorMessage(errors?.email)}
        />

        <FormTextField
          placeholder="Create Password"
          type={showPassword ? "text" : "password"}
          register={register}
          validation={{
						name: 'password',
						rules: validationRules.password
					}}
          showPasswordToggle
          toggleVisibility={togglePasswordVisibility}
					errorMessage={getErrorMessage(errors?.password)}
					/>

        <FormTextField
          placeholder="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          register={register}
          validation={{
						name: 'confirmPassword',
						rules: validationRules.confirmPassword
					}}
					// Текущая реализация выше работает верно(и без watch), но следующая(с watch) более наглядая
					// validation={{
						// 	name: 'confirmPassword',
						// 	rules: {
							// 		required: VALIDATION_MESSAGES.confirmPassword.required,
							// 		validate: (value: string) =>
							// 			value === password || VALIDATION_MESSAGES.confirmPassword.mismatch,
							// 		minLength: {
								// 			value: MIN_PASSWORD_LENGTH,
								// 			message: VALIDATION_MESSAGES.confirmPassword.minLength,
								// 		},
								// 	}
						// }}
					showPasswordToggle
					toggleVisibility={toggleConfirmPasswordVisibility}
					errorMessage={getErrorMessage(errors?.confirmPassword)}
        />

				<Button
					disabled={isLoading}
					kind={Kind.Secondary}
					title={isLoading ? 'Loading...' : "Sign up"}
					type="submit"
				/>

				<div className={formStyles.bottom}>
					<p className={typographyCss.caption.regular}>Already have account?</p>
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

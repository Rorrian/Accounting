import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";

import { registerFormStyles } from "@/modules/AuthForms/RegisterForm/RegisterForm.css";
import { FieldValidationRule } from "@/types/commonTypes";

import { TextField } from "../TextField/TextField";


interface FormTextFieldProps {
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  validation: FieldValidationRule;
  errorMessage?: string | null;
  showPasswordToggle?: boolean;
  toggleVisibility?: () => void;
}

export const FormTextField = ({
  type,
  placeholder,
  register,
  validation,
  errorMessage,
  showPasswordToggle,
  toggleVisibility,
}: FormTextFieldProps) => (
  <div className={registerFormStyles.passwordWrapper}>
    <TextField
      errorMessage={errorMessage}
      isValid={!errorMessage}
      type={type}
      placeholder={placeholder}
      {...register(validation.name, validation.rules)}
    />

		{/* TODO: Подправить отображение в темной теме */}
    {showPasswordToggle && (
      <button
        className={clsx(
          registerFormStyles.passwordBtn,
          type === "text" && registerFormStyles.showPassword
        )}
        type="button"
        onClick={toggleVisibility}
      />
    )}
  </div>
);

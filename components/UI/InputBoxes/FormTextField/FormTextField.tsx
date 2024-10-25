import clsx from "clsx";

import { registerFormStyles } from "@/modules/AuthForms/RegisterForm/RegisterForm.css";

import { TextField } from "../TextField/TextField";

interface FormTextFieldProps {
  type: string;
  placeholder: string;
  register: any;
  validation: any;
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

import { Logo } from "@/components/Logo/Logo";
import { ChangePasswordForm } from "@/modules/AuthForms/ChangePasswordForm/ChangePasswordForm";
import { authFormStyles } from "@/modules/AuthForms/AuthForms.css";

import { authStyles } from "../auth/AuthPage.css";

export default function ChangePasswordPage() {
	return (
		<div className={authStyles.inner}>
			<Logo className={authStyles.logo} />

			<ChangePasswordForm	className={authFormStyles.form}/>
		</div>
	)
}
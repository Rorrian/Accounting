import { Logo } from "@/components/Logo/Logo"
import { ToggleThemeBtn } from "@/components/ToggleThemeBtn/ToggleThemeBtn"
import { AuthForms } from "@/modules/AuthForms/AuthForms"

import { authStyles } from "./Auth.css"

// TODO: Если авторизированный юзер сюда заходит, то его редиректит на главную
export default function Auth() {
	return (
		<div className={authStyles.inner}>
			<Logo className={authStyles.logo} />

			<ToggleThemeBtn />

			<AuthForms className={authStyles.forms} />
		</div>
	)
}

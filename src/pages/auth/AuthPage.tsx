import { AuthForms } from '@features/auth'
import { ToggleThemeBtn } from '@features/change-theme'
import { Logo } from '@shared/ui'

import { authStyles } from './AuthPage.css'

export const AuthPage = () => {
  return (
    <div className={authStyles.inner}>
      <Logo className={authStyles.logo} />

      <ToggleThemeBtn />

      <AuthForms className={authStyles.forms} />
    </div>
  )
}

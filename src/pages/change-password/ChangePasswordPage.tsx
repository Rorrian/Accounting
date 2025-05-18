import { authFormStyles, ChangePasswordForm } from '@features/auth'
import { Logo } from '@shared/ui'

import { authStyles } from '../auth/AuthPage.css'

export const ChangePasswordPage = () => {
  return (
    <div className={authStyles.inner}>
      <Logo className={authStyles.logo} />

      <ChangePasswordForm className={authFormStyles.form} />
    </div>
  )
}

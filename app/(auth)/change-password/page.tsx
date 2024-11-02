import { Logo } from '@/components/Logo/Logo'
import { authFormStyles } from '@/modules/AuthForms/AuthForms.css'
import { ChangePasswordForm } from '@/modules/AuthForms/ChangePasswordForm/ChangePasswordForm'

import { authStyles } from '../auth/AuthPage.css'

export default function ChangePasswordPage() {
  return (
    <div className={authStyles.inner}>
      <Logo className={authStyles.logo} />

      <ChangePasswordForm className={authFormStyles.form} />
    </div>
  )
}

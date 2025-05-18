import {
  getAccessToken,
  saveTokenStorage,
  removeFromStorage,
} from './api/auth.helper'
import authService from './api/auth.service'
import { ADMIN_PAGES } from './config/admin.config'
import { PublicPageNames, PUBLIC_PAGES } from './config/public.config'
import { AuthForms } from './ui/AuthForms/AuthForms'
import { authFormStyles } from './ui/AuthForms/AuthForms.css'
import { ChangePasswordForm } from './ui/ChangePasswordForm/ChangePasswordForm'
import { EnumTokens } from './utils/constants'
import { getServerAuth } from './utils/get-server-auth'
import { protectPage } from './utils/protect-page'
import { transformUserToState } from './utils/transform-user-to-state'

export {
  getAccessToken,
  saveTokenStorage,
  removeFromStorage,
  authService,
  ADMIN_PAGES,
  PublicPageNames,
  PUBLIC_PAGES,
  AuthForms,
  authFormStyles,
  ChangePasswordForm,
  EnumTokens,
  getServerAuth,
  protectPage,
  transformUserToState,
}

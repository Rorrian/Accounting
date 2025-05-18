import { instance } from '@shared/api/axios'

import {
  LoginCredentials,
  LoginResponse,
  RegisterCredentials,
  User,
} from '../model/types'

class UserService {
  private _BASE_URL = '/users'

  async register(credentials: RegisterCredentials) {
    return instance.post<User>(`${this._BASE_URL}/register`, credentials)
  }
  async login(credentials: LoginCredentials) {
    return instance.post<LoginResponse>(`${this._BASE_URL}/login`, credentials)
  }
  async logout() {
    return instance.post(`${this._BASE_URL}/logout`)
  }

  async fetchProfile() {
    return instance.get<User>(`${this._BASE_URL}/profile`)
  }

  // Удалить позже
  async fetchPremium() {
    return instance.get<{ text: string }>(`${this._BASE_URL}/premium`)
  }
  async fetchList() {
    return instance.get<User[]>(`${this._BASE_URL}/list`)
  }
}

export default new UserService()

import { instance } from '@/api/axios'
import { User } from '@/types/commonTypes'

class UserService {
	private _BASE_URL = '/users'

	async fetchProfile() {
		return instance.get<User>(`${this._BASE_URL}/profile`)
	}

	async fetchPremium() {
		return instance.get<{ text: string }>(`${this._BASE_URL}/premium`)
	}

	async fetchList() {
		return instance.get<User[]>(`${this._BASE_URL}/list`)
	}
}

export default new UserService()

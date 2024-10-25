import { axiosClassic } from '@/api/axios'
import { User } from '@/types/commonTypes'

class UserService {
	private _BASE_URL = '/users'

	async fetchProfile() {
		return axiosClassic.get<User>(`${this._BASE_URL}/profile`)
	}
}

export default new UserService()

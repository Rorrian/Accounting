import { axiosClassic } from '@/api/axios'
import { IUser } from '@/types/commonTypes'

class UserService {
	private _BASE_URL = '/users'

	async fetchProfile() {
		return axiosClassic.get<IUser>(`${this._BASE_URL}/profile`)
	}
}

export default new UserService()

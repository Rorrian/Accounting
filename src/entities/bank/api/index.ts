import { instance } from '@shared/api/axios'

import { Bank } from '../model/types'

class BankService {
  private _BASE_URL = '/bank'

  async fetchBanks() {
    return instance.get<Bank[]>(`${this._BASE_URL}`)
  }

  // async fetchBank(bankId: number) {
  //   return instance.get<Bank>(`${this._BASE_URL}/${bankId}`)
  // }

  async editBank(bankId: number, newBankData: { name: string }) {
    return instance.put<Bank>(`${this._BASE_URL}/${bankId}`, newBankData)
  }

  async deleteBank(bankId: number) {
    return instance.delete<string>(`${this._BASE_URL}/${bankId}`)
  }
}

export default new BankService()

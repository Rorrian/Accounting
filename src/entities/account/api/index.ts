import { instance } from '@shared/api/axios'

import { Account } from '../model/types'

class AccountService {
  private _BASE_URL = '/account'

  async createAccount(newAccountData: Omit<Account, 'id'>) {
    return instance.post<Account>(`${this._BASE_URL}`, newAccountData)
  }

  async fetchAccounts() {
    return instance.get<Account[]>(`${this._BASE_URL}`)
  }

  // async fetchAccount(accountId: number) {
  //   return instance.get<Account>(`${this._BASE_URL}/${accountId}`)
  // }

  // async fetchCurrentBankAccounts(bankId: number) {
  //   return instance.get<Account>(`${this._BASE_URL}/${bankId}`)
  // }

  // async editAccount(accountId: number, newAccountData: Omit<Account, 'id'>) {
  //   return instance.put<Account>(`${this._BASE_URL}/${accountId}`, newAccountData)
  // }

  // async deleteAccount(accountId: number) {
  //   return instance.delete<string>(`${this._BASE_URL}/${accountId}`)
  // }
}

export default new AccountService()

import { instance } from '@shared/api/axios'

import { NewTransaction, Transaction } from '../model/types'

class TransactionService {
  private _BASE_URL = '/account'

  async createTransaction(
    accountId: number,
    newTransactionData: NewTransaction,
  ) {
    return instance.post<Transaction>(
      `${this._BASE_URL}/${accountId}/transaction`,
      newTransactionData,
    )
  }

  // async fetchCurrentBankTransactions(accountId: number) {
  //   return instance.get<Transaction[]>(
  //     `${this._BASE_URL}/${accountId}/transactions`,
  //   )
  // }

  // async fetchTransaction(accountId: number, transactionId: number) {
  //   return instance.get<Transaction>(
  //     `${this._BASE_URL}/${accountId}/transaction/${transactionId}`,
  //   )
  // }

  // async editTransaction(
  //   accountId: number,
  //   transactionId: number,
  //   newTransactionData: NewTransaction,
  // ) {
  //   return instance.put<Transaction>(
  //     `${this._BASE_URL}/${accountId}/transaction/${transactionId}`,
  //     newTransactionData,
  //   )
  // }

  // async deleteTransaction(accountId: number, transactionId: number) {
  //   return instance.delete<string>(
  //     `${this._BASE_URL}/${accountId}/transaction/${transactionId}`,
  //   )
  // }
}

export default new TransactionService()

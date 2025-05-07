import { persist } from 'zustand/middleware'

import { BankProps } from '@/components/List/ListItem'

import { createStore } from '../createStore'

export interface BanksStore {
  banks: BankProps[]
  addBank: (bank: BankProps) => void
  editBank: (newBankData: BankProps) => void
  deleteBank: (id: string) => void
}

export const useBanksStore = createStore<BanksStore>(
  persist(
    (set, get) => ({
      // banks: Banks,
      banks: [],

      addBank: (newBank: BankProps) => {
        set(state => ({
          banks: [...state.banks, newBank],
        }))
      },

      editBank: (newBankData: BankProps) => {
        set(state => ({
          banks: state.banks.map(bank =>
            bank.id === newBankData.id
              ? { ...bank, name: newBankData.name }
              : bank,
          ),
        }))
      },

      deleteBank: (id: string) => {
        set(state => ({
          banks: state.banks.filter(bank => bank.id !== id),
        }))
      },
    }),
    {
      name: 'Banks',
    },
  ),
  'Banks',
)

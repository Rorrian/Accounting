import { persist } from 'zustand/middleware'

// TODO
import { ListItemProps } from '@shared/ui/List/ListItem'

import { createStore } from '../createStore'

export interface BanksStore {
  banks: ListItemProps[]
  addBank: (bank: ListItemProps) => void
  editBank: (newBankData: ListItemProps) => void
  deleteBank: (id: string) => void
}

export const useBanksStore = createStore<BanksStore>(
  persist(
    (set, get) => ({
      // banks: Banks,
      banks: [],

      addBank: (newBank: ListItemProps) => {
        set(state => ({
          banks: [...state.banks, newBank],
        }))
      },

      editBank: (newBankData: ListItemProps) => {
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

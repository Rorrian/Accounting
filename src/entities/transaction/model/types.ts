export enum Currency {
  EUR = 'EUR',
  RUB = 'RUB',
  USD = 'USD',
}

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export interface Money {
  amount: number
  currency: Currency
}

export interface Transaction {
  id: number
  money: Money
  createdAt: string
  date: string
  type: TransactionType
  categoryId: number
  categoryName: number
  subCategoryId?: number
  subCategoryName?: number
  frequencyId?: string
  frequencyName?: string
  shopId?: number
  shopName?: number
  comment?: string
}

export interface NewTransaction {
  money: Money
  createdAt: string
  date: string
  type: TransactionType
  categoryId: number
  subCategoryId?: number
  frequencyId?: string
  shopId?: number
  comment?: string
}

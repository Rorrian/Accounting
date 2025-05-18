import {
  CircleUserRound,
  Component,
  CreditCard,
  Database,
  Hourglass,
  House,
  KeyRound,
  Landmark,
  PiggyBank,
} from 'lucide-react'
import { ReactNode } from 'react'

// TODO:
import { PUBLIC_PAGES, PublicPageNames } from '@features/auth'

export interface IMenuItem {
  className?: string
  icon?: ReactNode
  link: string
  name: string
  subMenuItems?: IMenuItem[]
}

export const MENU: IMenuItem[] = [
  {
    icon: <House size={24} />,
    name: PublicPageNames.DASHBOARD,
    link: PUBLIC_PAGES.DASHBOARD,
  },
  {
    icon: <KeyRound size={24} />,
    name: PublicPageNames.AUTH,
    link: PUBLIC_PAGES.AUTH,
  },
  {
    icon: <Database size={24} />,
    name: PublicPageNames.USER_FINANCIAL_DATA,
    link: PUBLIC_PAGES.USER_FINANCIAL_DATA,
    subMenuItems: [
      {
        icon: <CreditCard size={24} />,
        name: PublicPageNames.BANK_ACCOUNTS,
        link: PUBLIC_PAGES.BANK_ACCOUNTS,
      },
      {
        icon: <Landmark size={24} />,
        name: PublicPageNames.BANKS,
        link: PUBLIC_PAGES.BANKS,
      },
      {
        icon: <PiggyBank size={24} />,
        name: PublicPageNames.SAVINGS,
        link: PUBLIC_PAGES.SAVINGS,
      },
      {
        icon: <Component size={24} />,
        name: PublicPageNames.CATEGORIES,
        link: PUBLIC_PAGES.CATEGORIES,
      },
      {
        icon: <Hourglass size={24} />,
        name: PublicPageNames.FREQUENCIES,
        link: PUBLIC_PAGES.FREQUENCIES,
      },
    ],
  },
  {
    icon: <CircleUserRound size={24} />,
    name: PublicPageNames.PROFILE,
    link: PUBLIC_PAGES.PROFILE,
  },
]

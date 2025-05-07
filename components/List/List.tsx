import clsx from 'clsx'
import React from 'react'

import { listStyles } from './List.css'
import { BankProps, ListItem } from './ListItem'

interface ListProps {
  className?: string
  // TODO
  items: any
  onDelete(id: string): void
  onEdit?(newBankData: BankProps): void
}

export const List = ({ className, items, onDelete, onEdit }: ListProps) => {
  return (
    <ul className={clsx(listStyles.list, className)}>
      {/* headline */}

      {items?.map(item => (
        <li key={item.id}>
          <ListItem {...item} onDelete={onDelete} onEdit={onEdit} />
        </li>
      ))}
    </ul>
  )
}

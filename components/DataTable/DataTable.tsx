'use client'

import clsx from 'clsx'
import React from 'react'

import { Banks } from '@/mocks/banks'
import { useBanksStore } from '@/store/test/useBanksStore'
import { textAlignCenter } from '@/styles/shared.css'
import { Kind, Size } from '@/types/components/button/enums'

import { dataTableStyles } from './DataTable.css'
import { List } from '../List/List'
import { Button } from '../UI/Button/Button'
import { Title } from '../UI/Title/Title'

interface DataTableProps {
  className?: string
  type: 'banks' | 'bank accounts' | 'savings'
}

export const DataTable = ({ className, type }: DataTableProps) => {
  const [banks, addBank, editBank, deleteBank] = useBanksStore(state => [
    state.banks,
    state.addBank,
    state.editBank,
    state.deleteBank,
  ])

  const handleSearch = () => {}
  const handleFilter = () => {}

  const getData = () => {
    switch (type) {
      case 'banks':
        return {
          route: 'banks',
          mockData: Banks,
        }
      default:
        return {
          route: 'banks',
          mockData: Banks,
        }
    }
  }

  const handleOnAdd = () => {
    addBank({ id: '123', name: 'test' })
  }

  return (
    <div className={clsx(dataTableStyles.wrapper, className)}>
      <Title titleClassName={textAlignCenter} headingType="h1">
        Banks
      </Title>

      <div className={dataTableStyles.panel}>
        <Button
          kind={Kind.Primary}
          size={Size.Small}
          title="Create"
          onClick={() => handleOnAdd()}
        />
        {/* TODO */}
        <span>Search...</span>
        <span>Filter</span>
        <span>Sorting</span>
      </div>

      {/* список */}
      <List
        // items={getData()?.mockData}
        items={banks}
        onDelete={deleteBank}
        onEdit={editBank}
      />
    </div>
  )
}

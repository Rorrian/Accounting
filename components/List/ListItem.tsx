'use client'

import clsx from 'clsx'
import { Check, Pencil, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Kind, Size } from '@/types/components/button/enums'

import { listStyles } from './List.css'
import { Button } from '../UI/Button/Button'
import { Form } from '../UI/Form/Form'
import { FormTextField } from '../UI/InputBoxes/FormTextField/FormTextField'

export interface BankProps {
  className?: string
  // TODO: универсальыне генерируемые типы?
  id: string
  name: string
  onDelete?(id: string): void
  onEdit?(newBankData: BankProps): void
}

export const ListItem = ({
  className,
  id,
  name,
  onDelete,
  onEdit,
}: BankProps) => {
  const formMethods = useForm()
  const { handleSubmit, register } = formMethods
  const [isEditing, setIsEditing] = useState(false)

  const handleOnEdit = (newBankData: BankProps) => {
    onEdit?.({ id, name: newBankData.name })
    setIsEditing(false)
  }

  const handleOnDelete = () => {
    onDelete?.(id)
  }

  return (
    <div className={clsx(listStyles.item, className)}>
      {/* <span>{id}</span> */}

      {!isEditing ? (
        <span>{name}</span>
      ) : (
        <FormProvider {...formMethods}>
          <Form
            className={listStyles.form}
            id="editBankInfoForm"
            onSubmit={handleSubmit(handleOnEdit)}
          >
            <FormTextField
              className={listStyles.textField}
              placeholder="New bank..."
              register={register}
              validation={{
                name: 'name',
                rules: {
                  required: `New bank name is required`,
                },
              }}
              defaultValue={name}
            />
          </Form>
        </FormProvider>
      )}

      <div className={listStyles.buttons}>
        <Button
          icon={!isEditing ? <Pencil /> : <Check />}
          kind={Kind.Secondary}
          size={Size.Small}
          onClick={() => {
            if (isEditing) {
              formMethods.handleSubmit(handleOnEdit)()
            } else {
              setIsEditing(true)
            }
          }}
          // наоборот ?
          type={!isEditing ? 'submit' : 'button'}
        />

        <Button
          icon={<Trash2 />}
          kind={Kind.Tertiary}
          size={Size.Small}
          onClick={handleOnDelete}
        />
      </div>
    </div>
  )
}

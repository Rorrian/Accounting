'use client'

import clsx from 'clsx'
import { Check, Pencil, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Form, FormTextField } from '..'

import { listStyles } from './List.css'
import { Kind, Size } from '../Button/types/enums'

export interface ListItemProps {
  className?: string
  // FIXME: универсальыне генерируемые типы?
  id: string
  name: string
  onDelete?(id: string): void
  onEdit?(newBankData: ListItemProps): void
}

export const ListItem = ({
  className,
  id,
  name,
  onDelete,
  onEdit,
}: ListItemProps) => {
  const formMethods = useForm()
  const { handleSubmit, register } = formMethods
  const [isEditing, setIsEditing] = useState(false)

  const handleOnEdit = (newBankData: ListItemProps) => {
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

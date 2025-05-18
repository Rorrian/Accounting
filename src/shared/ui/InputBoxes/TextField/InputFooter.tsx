import React from 'react'

import { InputCounter } from '../InputBoxes.types'
import { inputStyles } from './TextField.css'

interface FooterInputProps {
  caption?: string
  counter?: InputCounter
  errorMessage?: string | null
  isValid?: boolean
}

export const FooterInput = ({
  caption,
  counter,
  errorMessage,
  isValid,
}: FooterInputProps) => {
  return (
    <>
      {!isValid && errorMessage && (
        <b className={inputStyles.errorText}>{errorMessage}</b>
      )}

      {caption && <p className="caption">{caption}</p>}

      {counter && (
        <p className="counter">{`${counter?.current}/${counter?.max}`}</p>
      )}
    </>
  )
}

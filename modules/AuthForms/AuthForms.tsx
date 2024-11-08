'use client'

import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'

import { AuthTypes, defaultTransition } from '@/helpers/constants'

import { authFormStyles } from './AuthForms.css'
import { LoginForm } from './LoginForm/LoginForm'
import { RegisterForm } from './RegisterForm/RegisterForm'
import { ResetPasswordForm } from './ResetPasswordForm/ResetPasswordForm'

interface AuthFormsProps {
  className?: string
}

const DIRECTION_PREV = -1
const DIRECTION_NEXT = 1

export const AuthForms = ({ className }: AuthFormsProps) => {
  const [currentFormIndex, setCurrentFormIndex] = useState(1)
  const [direction, setDirection] = useState(0)

  const forms = [
    {
      type: AuthTypes.ResetPassword,
      component: (
        <ResetPasswordForm
          className={authFormStyles.form}
          onSignIn={() => switchForm(DIRECTION_NEXT)}
        />
      ),
    },
    {
      type: AuthTypes.Login,
      component: (
        <LoginForm
          className={authFormStyles.form}
          onResetPassword={() => switchForm(DIRECTION_PREV)}
          onSignUp={() => switchForm(DIRECTION_NEXT)}
        />
      ),
    },
    {
      type: AuthTypes.Register,
      component: (
        <RegisterForm
          className={authFormStyles.form}
          onSignIn={() => switchForm(DIRECTION_PREV)}
        />
      ),
    },
  ]
  const currentForm = forms[currentFormIndex]

  const variants = {
    enter: (currentDirection: number) => ({
      x: currentDirection > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (currentDirection: number) => ({
      zIndex: 0,
      x: currentDirection < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  // const calcSwipeForce = (offset: number, velocity: number) =>
  //   Math.abs(offset) * velocity

  const switchForm = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentFormIndex(
      prevIndex => (prevIndex + newDirection + forms.length) % forms.length,
    )
  }
  // const handleSwipeEnd = (offset: Point, velocity: Point) => {
  //   const swipe = calcSwipeForce(offset.x, velocity.x)
  //   if (swipe < -MIN_SWIPE_FORCE) {
  //     switchForm(DIRECTION_NEXT)
  //   } else if (swipe > MIN_SWIPE_FORCE) {
  //     switchForm(DIRECTION_PREV)
  //   }
  // }

  return (
    <div className={className}>
      <div className={authFormStyles.formBox}>
        <AnimatePresence initial={false} custom={direction}>
          <m.div
            key={currentForm.type}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={defaultTransition}
            // Переключение форм перетаскиванием
            // drag="x"
            // dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={1}
            // onDragEnd={(e, { offset, velocity }) =>
            // 	handleSwipeEnd(offset, velocity)
            // }
            className={authFormStyles.formWrapper}
          >
            {currentForm.component}
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

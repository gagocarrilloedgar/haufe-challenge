import React from 'react'

import style from './buttons.module.css'

type Props = {
  children?: React.ReactNode
  onClick?: () => void
  className?: string
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button className={props.className || style.button} {...props}>
      {children}
    </button>
  )
}

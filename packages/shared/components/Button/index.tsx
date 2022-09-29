import React from 'react'
import { Button, ButtonProps } from '@mui/material'

const Button1 = ({ ...props }: ButtonProps) => {
  return <Button {...props}>Boop</Button>
}

export default Button1

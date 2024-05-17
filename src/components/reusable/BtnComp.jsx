import { Button } from '@mui/material'
import React from 'react'

const BtnComp = ({BtnName ,variant,className}) => {
  return (
    <Button className={className} variant={variant}>{BtnName}</Button>
  )
}

export default BtnComp
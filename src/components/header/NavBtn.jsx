import { Button } from '@mui/material'
import React from 'react'

const NavBtn = ({BtnName ,onClick,className }) => {
  return (
    <Button variant="contained" className={className} onClick={onClick} >{BtnName}</Button>
  )
}

export default NavBtn
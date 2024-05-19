import { Button } from '@mui/material'
import React from 'react'

const NavBtn = ({BtnName ,onClick }) => {
  return (
    <Button variant="contained" onClick={onClick} >{BtnName}</Button>
  )
}

export default NavBtn
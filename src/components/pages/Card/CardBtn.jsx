import { Button } from '@mui/material'
import React from 'react'

const CardBtn = ({BtnCardName, onClick}) => {
  return (
    <Button variant="contained" onClick={onClick} >{BtnCardName}</Button>
  )
}

export default CardBtn
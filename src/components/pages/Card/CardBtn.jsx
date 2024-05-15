import { Button } from '@mui/material'
import React from 'react'

const CardBtn = ({BtnCardName}) => {
  return (
    <Button variant="contained">{BtnCardName}</Button>
  )
}

export default CardBtn
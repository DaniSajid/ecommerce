import { TextField } from '@mui/material'
import React from 'react'

const InpComp = ({type, name, value, onChange, onBlur,label,id }) => {
  return (
    <>
      <TextField fullWidth defaultValue="Small" size="small" id={id} onChange={onChange} onBlur={onBlur} type={type} name={name} value={value}  label={label} variant="outlined" />
    </>
  )
}

export default InpComp
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Sign = () => {
  return (
    <div>
    <Typography variant='h3'>Enter details</Typography>
    <TextField label='Firstname' variant="outlined"></TextField><br></br>
    <TextField label='Lastname' variant="outlined"></TextField><br></br>
    <TextField label='Email' variant="outlined"></TextField><br></br>
    <TextField label='Password' type={'password'} variant="outlined"></TextField><br></br>
    <Button variant='contained' color='success'>Signin</Button>
    </div>
  )
}

export default Sign

import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>

      <Typography variant='h1'>Login</Typography>
      <TextField label='Email' variant='filled'></TextField>
      <br></br>
      <TextField label='password' type={'password'} variant='filled'></TextField>
      <br></br>
      <Button variant='contained' color='success'>Login</Button>
    </div>
  )
}

export default Login

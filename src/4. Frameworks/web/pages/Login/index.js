import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/actions'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import './index.scss'

const Login = ({ userController }) => {

  const dispatch = useDispatch()
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 

  const login = async () => {
    const isAuthenticated = await userController.authenticateUser(username, password)
    if(isAuthenticated)
      return dispatch(authActions.login(username))
    alert('Usuario o contraseña incorrectos')
  }

  return (
    <Layout title='Iniciar sesión'>
      <div className='login-container'>
        <div className='login-input'>        
          <Input
            name='Usuario'
            placeholder='Usuario'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='login-input'>
          <Input
            name='Contraseña'
            placeholder='Contraseña'
            value={password}
            type='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='login-button'>
          <Button 
            text='Ingresar'
            type='primary'
            disabled={!username || !password}
            onClick={() => login()}
          />
        </div>
      </div>
    </Layout>
  )

}

export default Login
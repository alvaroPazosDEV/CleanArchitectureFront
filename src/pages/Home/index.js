import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../redux/actions'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Option from '../../components/Option'
import { history } from '../../utils/history'
import './index.scss'

const Home = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.authReducer.user)

  const logout = () => {
    dispatch(authActions.logout())
  }

  return (
    <Layout title={`Bienvenido, ${user}!`}>
      <div className='home-container'>
        <div className='home-options'>
          <Option
            text='Consultar orden de compra'
            onClick={() => history.push('/consultar-orden')}
          />
        </div>
        <div className='home-logout'>
          <Button
            text='Cerrar sesión'
            type='primary'
            onClick={() => logout()}
          />
        </div>
      </div>
    </Layout>
  )

}

export default Home
import React from 'react'
import logo from '../../assets/images/logo.png'
import ripleyBar from '../../assets/images/bar.png'
import './index.scss'

const Layout = ({ title, children }) => {

  return (
    <div className='lo-container'>
      <div className='lo-box'>
        <div className='lo-header'>
          <img src={logo} />
          <p>R PEDIDOS</p>
        </div>
        <div className='lo-body'>
          <h2>{title}</h2>
          {children}
        </div>
        <div className='lo-footer'>
          <img src={ripleyBar} />
        </div>
      </div>
    </div>
  )

}

export default Layout
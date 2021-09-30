import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Search from '../../components/Search'
import './index.scss'

const QueryOrder = ({ test, orderController }) => {

  const [order, setOrder] = useState('')
  const [orderData, setOrderData] = useState(null)

  const validateOrder = async text => {
    if(text.length < 8) {
      setOrder(text)
      setOrderData(null)
    } else if (text.length === 8) {
      setOrder(text)
      const data = await orderController.getOrder(text)
      if(data) setOrderData(data)
    }
  }

  return (
    <Layout title='Entregar orden'>
      <div className='do-container'>
        <p>En primer lugar, debe ingresar el número de orden de compra del cliente.</p>
        <div className='do-search'>
          <Search
            placeholder='Orden de compra'
            value={order}
            onChange={text => validateOrder(text)}
          />
        </div>
        {
          order.length === 8 && (
            orderData ? (
              <div className='do-result'>
                <p>Cliente: <b>{orderData.clientName}</b></p>
                <p>DNI: <b>{orderData.clientDni}</b></p>
                <p>Estado: <b className='do-result-status'>
                  {orderData.status === 'RECEIVED' ? 'En camino' : 'Entregado'}
                </b></p>
              </div>
            ) : <div className='do-noresult'>No se encontraron resultados.</div>
          )
        }
      </div>
    </Layout>
  )

}

export default QueryOrder
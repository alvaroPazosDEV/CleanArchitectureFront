import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Search from '../../components/Search'
import orderAPI from '../../apis/order'
import './index.scss'

const QueryOrder = () => {

  const [order, setOrder] = useState('')
  const [orderData, setOrderData] = useState(null)

  const validateOrder = async text => {
    if(text.length < 8) {
      setOrder(text)
      setOrderData(null)
    } else if (text.length === 8) {
      setOrder(text)
      const data = await orderAPI.getByNumber(text)
      if(data) setOrderData(data)
    }
  }

  return (
    <Layout title='Consultar orden'>
      <div className='do-container'>
        <p>Ingrese el número de orden de compra del cliente.</p>
        <div className='do-search'>
          <Search
            placeholder='Ejm. 28371526'
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
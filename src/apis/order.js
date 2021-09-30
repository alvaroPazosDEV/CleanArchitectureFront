import axios from 'axios'

const BASE_URL = 'https://clean-backend-1997.herokuapp.com/api'

const orderAPI = {

  getByNumber: async (orderNumber) => {
    const { data } = await axios.get(`${BASE_URL}/order/${orderNumber}`)
    if(!data) return null
    const order = {
      orderNumber: data.orderNumber,
      clientDni: data.clientDni,
      clientName: data.client.name,
      status: data.status
    }
    return order
  }

}

export default orderAPI
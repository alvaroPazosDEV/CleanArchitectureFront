const axios = require('axios')
const OrderRepository = require('../../2. Application/contracts/OrderRepository')

module.exports = class OrderRepositoryService extends OrderRepository {

  constructor() {
    super()
    this.BASE_URL = 'https://clean-backend-1997.herokuapp.com/api'
  }

  async getByNumber(orderNumber) {
    const { data } = await axios.get(`${this.BASE_URL}/order/${orderNumber}`)
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
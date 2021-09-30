const axios = require('axios')
const OrderRepository = require('../../2. Application/contracts/OrderRepository')

module.exports = class OrderRepositoryService extends OrderRepository {

  constructor() {
    super()
    this.url = 'http://localhost:3000/api'
  }

  async getByNumber(orderNumber) {
    const { data } = await axios.get(`${this.url}/order/${orderNumber}`)
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
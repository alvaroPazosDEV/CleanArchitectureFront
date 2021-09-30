module.exports = class OrderRepository {

  constructor() {}

  getByNumber(orderNumber) {
    return Promise.reject(new Error('Not implemented'))
  }

}
module.exports = class Order {
  constructor(orderNumber, clientDni, clientName, status) {
    this.orderNumber = orderNumber
    this.clientDni = clientDni
    this.clientName = clientName
    this.status = status
  }
}
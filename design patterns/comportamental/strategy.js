class SendStrategy {
  calcCost(cost) {
    throw new Error('não exsite implementação deste método de envio')
  }
}

class PremiumSendStrategy {
  calcCost(cost) {
    return cost * 1.2
  }
}
class PlusSendStrategy {
  calcCost(cost) {
    return cost * 1.8
  }
}

class Order {
  constructor(cost, strategy) {
    this.cost = cost
    this.strategy = strategy
  }
  getFinalCost() {
    return this.strategy.calcCost(this.cost)
  }
}

const order1 = new Order(100, new PremiumSendStrategy())
console.log(order1.getFinalCost())
const order2 = new Order(100, new PlusSendStrategy())
console.log(order2.getFinalCost())
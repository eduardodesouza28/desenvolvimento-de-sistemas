class NotificationSystem {
  #observers
  constructor() {
    this.#observers = []
  }
  addObserver(observer) {
    this.#observers.push(observer)
  }
  removeObserver(observer) {
    this.#observers = this.#observers.filter((item) => item.name != observer.name)
  }
  sendNotificationToObservers(data) {
    this.#observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  update(message) {
    console.log(`o usuario ${this.name} recebeu ${message}`)
  }
}

const shop = new NotificationSystem()
const client1 = new Observer('joão')
const client2 = new Observer('Carlos')
const client3 = new Observer('julião')

shop.addObserver(client1)
shop.addObserver(client2)

shop.sendNotificationToObservers('teste')
shop.removeObserver(client2)
shop.sendNotificationToObservers('teste2')
class Animal {
  constructor (name) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())

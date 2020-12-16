abstract class Girl {
  abstract skill()
}

class Waiter extends Girl {
  skill() {
    // 业务逻辑不同
    console.log('大爷，请喝水')
  }
}

class BaseTeacher extends Girl {
  skill() {
    console.log('大爷，来个泰式按摩')
  }
}

class SeniorTeacher {
  skill() {
    console.log('大爷，全身按摩')
  }
}


/*class Person {
  public readonly _name:string
  constructor (name: string) {
    this._name = name
  }
}
const person = new Person('jspang')
console.log(person._name)*/


/*class Animal {
  constructor (name) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())*/

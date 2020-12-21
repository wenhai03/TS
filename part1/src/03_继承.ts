(function () {
  // 定义一个Animal
  class Animal {
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHello() {
      console.log('动物在叫~~')
    }
  }

  /*
  * Dog extends Animal
  *  - 此时 Animal被称为父类  Dog被称为子类
  *  - 使用继承后，子类将会拥有父类所有的方法和属性
  *  - 通过继承可以将多个类中共有的代码写在一个父类中
  *     这样只需要写一次即可让所有的子类都同时拥有父类中的属性
  *     如果希望在子类中添加一些父类中没有的属性或方法直接加 就可以
  *  - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖父类的方法
  *     这种子类覆盖掉父类的方法的形式，称为方法重写
  * */

  // 定义一个表示狗的类
  // 使Dog类继承Animal类
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑`)
    }

    sayHello() {
      console.log('汪汪汪~~')
    }
  }

  // 使Cat类继承Animal类
  class Cat extends Animal {

  }

  const dog = new Dog('小黑', 4)
  const cat = new Cat('咪咪', 5)

  cat.sayHello()
  dog.sayHello()

  dog.run()

})()

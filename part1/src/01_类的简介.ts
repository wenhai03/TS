// 使用class关键字来定义一个类
/*
* 对象中主要包含两个部分
* 属性
* 方法
* */
class Person {
  /*
  * 直接定义的属性是实例属性， 需要通过对象的实例去访问
  *
  * const per = new Person()
  * per.name
  *
  * 使用static开头的属性是静态属性(类属性)，可以直接通过类去访问
  * Person.age
  *
  * */

  // 定义实例属性
  readonly name: string = 'a'

  // 在属性前使用 static关键字 可以定义类属性(静态属性)
  static age: number = 18


  // 定义方法
  /*
  * 如果方法以static开头则方法就是类方法，可以直接通过类去调用
  * */
  static sayHello() {
    console.log('hello 大家好')
  }
}

const per = new Person()

console.log(per)
console.log(Person.age)
// per.name = 'bbbbbb'
console.log(per)
console.log(per.name)

Person.sayHello()


class Dog {
  name: string
  age: number

  // constructor被称为构造函数
  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中 this就表示当前的实例
    // 在构造函数中当前对象就是新建的那个对象
    // 可以通过this向新建的对象中添加属性
    console.log('构造函数')
    console.log('this', this)
    this.name = name
    this.age = age

  }

  bark() {
    // console.log('汪汪汪')
    // 在方法中可以通过this来表示当前调用方法的对象
    console.log(this.name)
  }
}

const dog = new Dog('小黑', 4)
const dog2 = new Dog('小白', 8)

dog2.bark()

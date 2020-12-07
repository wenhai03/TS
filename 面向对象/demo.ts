class User {
  static genders = ['男', '女', '未知'];

  constructor( public username: string) {

  }

  eat() {}

  static method() {
    // 如果一个类的方法中没有依赖 this 那么这个方法其实也是类
    // User.genders
    // this;
    return 111
  }
}

let user1 = new User('mt')
console.log(' -> ', User.method())



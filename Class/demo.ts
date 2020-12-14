class Lady {
  content = 'hi 帅哥'
  sayHello() {
    return this.content
  }
}

class XiaoJieJie extends Lady{
  // sayHello() { // 重写方法
  //   return 'Hi, honey'
  // }
  sayHello() { // 重写方法
    return super.sayHello() + " 拓展方法"
  }

  sayLove() {
    return 'I love you'
  }
}


const a = new Lady()
const b = new XiaoJieJie()
console.log('11111', b.sayHello())
console.log('22222', b.sayLove())

interface T {
  a: number;
  fn: (x: number) => void;
  fn2: (x: number) => void;
}

let obj1: T = {
  a: 1,
  fn(this: T,x: number){
    // 通过第一个参数标注 this 的类型，它对实际参数不会有影响
    console.log(this)
  },
  fn2(x: number){
    console.log(this)
  }
}

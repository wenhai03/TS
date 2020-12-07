interface IUser {
  username: string,
  age: number,
  eat(a: string): void
}

let obj:IUser = {
  username: 'zmouse',
  age: 35,
  eat(this: IUser) { // this的标注是不占用实际参数的位置
    console.log(this)
  }
}

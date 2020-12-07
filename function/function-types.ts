const add = (x: number, y: number, z?: number): number =>{
    if (typeof z === 'number') {
      return x+y+z
    }
    return x +y
}

interface ISum{
    (x: number, y: number, z?:number): number
}

let add2:ISum = add
console.log('add2 -> ', add2)

/*-----------*/
// type callback 类型名称，在编译以后的代码中将会被删除
// fn2 callback形参是一个参数 变量
type callback = (a: number, b: number) => number
function fn2(callback: callback) {

}
fn2(function (a, b) { return a + b })
/*-----------*/

interface ICallBack {
  (a: number, b: number): number
}
function fn3(callback: ICallBack) {
}
fn3(function (a, b) {
  return a+b
})


/*
function add(x: number, y: number, z?: number): number {
    return x +y
}

let r = add(1,2)
*/

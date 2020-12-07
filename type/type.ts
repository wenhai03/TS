let p1 = {
  name: '小明',
  age: 35
}
// 变量类型提取
type T = typeof p1
// key提取出来
type K = keyof T

// function getVal(key: K) {
function getVal(key: keyof typeof p1) {
  return p1[key]
}

getVal(name)


/*------------------------*/

type t = string | number // 联合类型

type user = {
  username: string,
  age: number
}

function fn(arg: user) {

}

fn({
  username: '',
  age: 1
})

// interface的区别 interface可以多个接口合并
interface user1{
  username: string,
  age: number
}

interface user1{
  gender: string
}

function fn1(arg: user1) {

}
fn1({
  username: '小明',
  age: 18,
  gender: '男',
})

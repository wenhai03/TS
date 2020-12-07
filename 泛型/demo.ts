function getVal<T>(target: T, key: keyof T) {
  return target[key]
}
let obj1 = {
  x: 1
}

let obj2 = {
  username: 'mt',
  age: 30
}

type O1 = typeof obj1
type O2 = typeof obj2

getVal<O2>(obj2, 'age')



/*function getVal(target, key: keyof typeof obj2) {
  return target[key]
}
let obj1 = {
  x: 1
}

let obj2 = {
  username: 'mt',
  age: 30
}

getVal(obj2, 'age')*/

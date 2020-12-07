interface IObj {
  [key: string]: any
}

function merge(target: IObj, ...others: Array<IObj>) {
  return others.reduce((pre, cur) => {
    pre = Object.assign(pre, cur)
    return pre
  }, target)
}

let newObj = merge({x: 1}, {y: 2}, {z: 3})

console.log('newObj -> ', newObj)

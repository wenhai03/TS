function add(a, b) {
  let rs = a+b
  return rs
}


function log(fn){
  return function (a, b) {
    console.log('参数', a, b)
    let rs = fn(a, b)
    console.log('结果', rs)
    return rs
  }
}

let newAdd = log(add)

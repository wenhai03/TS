function sort(item: Array<number>, order='desc') {
  console.log('order -> ', order)

}

sort([1,2,3])


// 也可以通过联合类型来限制取值
function sort1(items: Array<number>, order: 'desc'|'asc' = 'desc') {

}
sort1([1,2,3], 'asc')
sort1([1,2,3])

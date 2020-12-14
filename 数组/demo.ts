const numberArr : number[]= [1,2,3]
const stringArr : string[] = ['a', 'b', 'c']
const undefinedArr : undefined[] = [undefined]

const arr :(number | string)[]= [1, 'string']

// type alias 类型别名
type Lady = {name: string, age: number}
class Madam {
  name: string;
  age: number;
}


const xiaojiejies :Madam[] = [
  {name: '刘英', age: 18},
  {name: '刘英', age: 18},
]

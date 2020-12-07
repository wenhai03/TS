interface Person {
    readonly id: number,
    name: string,
    age?: number
}

let obj: Person = {
    id: 1,
    name: '小明',
    age: 3
}

// 属性未知

interface T {
  [x: string]: number | string
}

let o: T
o.x = 1
o.y = 2

o.z = 1
o.t = 'a'

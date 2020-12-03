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


/*
function add(x: number, y: number, z?: number): number {
    return x +y
}

let r = add(1,2)
*/

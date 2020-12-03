function echo<T>(arg: T): T {
    return arg
}

const result: string = echo('123')

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
    // @ts-ignore
    console.log(arg.length)

    return arg
}

const arrs = echoWithArr([])


interface IWidthLength{
    length: number
}

function echoWidthLength<T extends IWidthLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
const str = echoWidthLength('str')
const obj = echoWidthLength({length: 10})
const arr2 = echoWidthLength([1,2,3])




/*
function echo(arg) {
    return arg
}
const result = echo(123)
// 这时候我们发现了一个问题，我们传入了数字，但是返回了 any*/


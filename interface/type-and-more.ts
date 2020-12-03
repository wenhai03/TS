let str = 'str'

// union types 联合类型
let numberOrString: number | string

numberOrString = '143'


function getLength(input: string | number): number {
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        const number = input as number
        return number.toString().length
    }
}

// types guard
function getLength2(input: string | number) {
    if (typeof input === 'string') {
      return input.length
    } else {
        return input.toString().length
    }
}


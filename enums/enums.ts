const enum Direction {
  Up = "UP",
  Down = "Down",
  Left = "Left",
  Right = 1
}

console.log('Direction -> ', Direction.Right)

console.log('Direction -> ', Direction['Right'])


/*enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log('Direction -> ', Direction.Right) // 0

// 枚举里面的值还可以看做数组去取值
console.log('Direction -> ', Direction[1]) // Down

// Up=10,后面的项会跟着递增*/


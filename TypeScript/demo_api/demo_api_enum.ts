/**
 * 枚举
 * https://www.tslang.cn/docs/handbook/enums.html
 */


// 数字枚举
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

// 字符串枚举
enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction2.Right)


// const枚举
// 成员在编译时确定，并且只能在声明时初始化
const enum Direction3 {
  Up,
  Down,
  Left,
  Right
}

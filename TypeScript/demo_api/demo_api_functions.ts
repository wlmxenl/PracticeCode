/**
 * 函数
 * https://www.tslang.cn/docs/handbook/functions.html
 */

// JavaScript 中定义函数示例
// function add1(x, y) {
//  return x + y
//}


// 为函数定义类型
function add2(x: number, y: number): number {
  return x + y
}


// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return `${firstName} ${lastName}`
  }
  return firstName
}
console.log(buildName("Bob"))
console.log(buildName("Bob", "Adams"))


// 默认参数
function buildName2(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
console.log(buildName2("Bob"))


// 剩余参数
function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ")
}
console.log(buildName3("Bob"))
console.log(buildName3("Bob", "1"))
console.log(buildName3("Bob", "1", "2"))

// 箭头函数
let add3 = (a: number, b: number) => a + b
console.log(add3(2, 2))

let add4 = (a: number, b: number) => {
  return a + b
}
console.log(add4(2, 2))
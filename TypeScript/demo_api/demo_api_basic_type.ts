/**
 * 基础类型示例
 * https://www.tslang.cn/docs/handbook/basic-types.html
 */


// boolean
let isOk = true
isOk = false

// number
let decLiteral: number = 6 // 十进制
let hexLiteral: number = 0xf00d // 十六进制
let binaryLiteral: number = 0b1010 // 二进制
let octalLiteral: number = 0o744 // 八进制

// string
let username = "bob"
let new_username = `${username}` // 字符串模板

// 数组
let list1: number[] = [1, 2, 3, 4, 5]
let list2: Array<number> = [1, 2, 3, 4, 5]
let list3 = [1, 2, 3, 4, 5]

// 元组
let x: [string, number] = ["hello", 1]

// 枚举
enum HttpType {
  GET, POST
}

// any
let notSure: any
console.log(notSure !== undefined)

let list4: any[] = [1, true, "free"]
console.log(list4[2])

// void, 无类型
let unusable: void = undefined
function warnUser(): void {
  console.log("This is my warning message")
}
warnUser()

// never, 不存在的值的类型, 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
 
function infiniteLoop(): never {
  while (true) {
  }
}

// 类型断言
let str: any = "1"
console.log(`-- ${(str as number)} --`)
console.log(`-- ${(<number>str)} --`)
// console.log(`-- ${str instanceof Boolean} --`)
// console.log(`-- ${typeof str === "boolean"} --`)


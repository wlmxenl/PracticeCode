/**
 * 泛型
 * https://www.tslang.cn/docs/handbook/generics.html
 */

function identity<T>(arg: T): T {
  return arg
}

// 传入参数类型和参数
identity<string>("myString")

// 类型推论
identity("myString")


// ---------------------------------------------
// 泛型接口

interface GenericIdentityFn<T> {
  generate(arg: T): T
}

class GenericIdentityString implements GenericIdentityFn<string> {
  generate(arg: string): string {
    return ""
  }
}

// ---------------------------------------------
// 在泛型里使用类类型

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) { return x + y }

// ---------------------------------------------
// 在泛型里使用类类型

function createInstance<T>(c: { new(): T }): T {
  return new c()
}

class BeeKeeper {
  hasMask: boolean
}
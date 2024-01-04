/**
 * 类
 * https://www.tslang.cn/docs/handbook/classes.html
 */

// ---------------------------------------------
// 类的定义和构造函数

class Greeter {
  greeting: string // 成员都默认为 public

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    return `Hello, ${this.greeting}`
  }
}

let greeter = new Greeter("world")
console.log(greeter.greet())


// ---------------------------------------------
// 继承

class Animal {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

class Dog extends Animal {
  private color: string

  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }

  bark() {
    console.log('Woof! Woof!')
  }
}

let dog = new Dog("阿奇", "白色")
dog.bark()
dog.move(10)

// ---------------------------------------------
// 修饰符

// public 默认, 无访问限制
// private 只能在该类内部访问
// protected 在子类中也可访问
// readonly 将属性设置为只读


// ---------------------------------------------
// 存取器， 通过 get 和 set 访问对象

class Employee {
  private _fullName: string = ""

  get fullName(): string {
      return this._fullName
  }

  set fullName(newName: string) {
    this._fullName = newName
  }
}

let employee = new Employee();
(<any>employee)._fullName = "John Doe";


// ---------------------------------------------
// 静态属性

class AppConstants {
  static API_VERSION = "1.0"
}
console.log(AppConstants.API_VERSION)


// ---------------------------------------------
// 抽象类

abstract class CustomViewGroup {
  abstract layout()
}

class CustomFrameLayout extends CustomViewGroup {
  layout() {
  }
}


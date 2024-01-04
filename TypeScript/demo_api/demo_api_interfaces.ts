/**
 * 接口使用示例
 * https://www.tslang.cn/docs/handbook/interfaces.html
 */

// ---------------------------------------------
// 定义接口, 类实现接口

interface ViewParent {
  requestLayout()
  isLayoutRequested(): boolean
  createContextMenu(res_id: number)
}

class DemoViewGroup implements ViewParent {
  requestLayout() {
  }
  isLayoutRequested(): boolean {
    return false
  }
  createContextMenu(res_id: number) {
  }
}

// ---------------------------------------------
// 可索引的类型

interface StringArray {
  [index: number]: string
}

let myArray: StringArray;
myArray = ["Bob", "Fred"]

let myStr: string = myArray[0]

// ---------------------------------------------
// 继承接口

interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = <Square>{} // 使用类型断言来告诉编译器该对象是 Square 类型
square.color = "blue"
square.sideLength = 10


// ---------------------------------------------
// 接口继承类
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class XImage extends Control implements SelectableControl {
  select(): void {}
}
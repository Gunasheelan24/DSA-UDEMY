class NodeStack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// class Stack {
//   constructor(value) {
//     const newStack = new NodeStack(value);
//     this.top = newStack;
//     this.height = 1;
//   }
//   topPush(value) {
//     const newNode = new NodeStack(value);
//     newNode.next = this.top;
//     this.top = newNode;
//     this.height++;
//     return this;
//   }
//   topPop() {
//     if (!this.top) return undefined;
//     let temp = this.top;
//     this.top = this.top.next;
//     temp.next = null;
//     this.height--;
//     return this;
//   }
// }

// const firstStack = new Stack(0);
// firstStack.topPush(1);
// firstStack.topPop();
// console.log(firstStack);

class Queue {
  constructor(value) {
    const newQueue = new NodeStack(value);
    this.first = newQueue;
    this.last = newQueue;
    this.length = 1;
  }
  enQueue(value) {
    const newValue = new NodeStack(value);
    if (!this.length === 0) {
      this.first = newValue;
      this.last = newValue;
    } else {
      this.last.next = newValue;
      this.last = newValue;
      return this;
    }
    this.length++;
  }
  deQueue() {
    if (!this.first) return undefined;
    
  }
}

const newStackNode = new Queue(0);
newStackNode.enQueue(1);
newStackNode.enQueue(2);
console.log(newStackNode);

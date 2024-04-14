// LILO Last in Last Out
// Creating The Node For Stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newStack = new Node(value);
    this.top = newStack;
    this.height = 1;
  }
  stackUnShift(value) {
    let newStack = new Node(value);
    if (!this.top) {
      this.top = newStack;
    } else {
      newStack.next = this.top;
      this.top = newStack;
    }
    this.height++;
    return this;
  }
  stackShift() {
    if (this.height === 0) {
      return undefined;
    } else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.height--;
      return temp;
    }
  }
}

const newStack = new Stack(0);
newStack.stackUnShift(1);
console.log(newStack);

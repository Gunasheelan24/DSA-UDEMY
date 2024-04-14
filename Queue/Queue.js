class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = this.first;
    this.length = 1;
  }
  queuePush(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  queueShift() {
    if (!this.first) return undefined;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first;
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
  }
}

const firstNode = new Queue(0);
firstNode.queuePush(1);
console.log(firstNode);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    const createdNode = new Node(value);
    this.head = createdNode;
    this.tail = this.head;
    this.length = 1;
  }
  pushMethod(value) {
    const createdNode = new Node(value);
    if (!this.head) {
      this.head = createdNode;
      this.tail = this.head;
    } else {
      this.tail.next = createdNode;
      createdNode.prev = this.tail;
      this.tail = createdNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
  }
  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
  }
  getMethod(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        console.log("It's Left Side");
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }
  setMethod(index, value) {
    const getNode = this.getMethod(index);
    if (getNode) {
      getNode.value = value;
    } else {
      return undefined;
    }
  }
  insertMethod(index = 2, value) {
    if (index === 0) {
      this.unShift(value);
    } else if (index === this.length) {
      this.pushMethod(value);
    } else if (index < 0 || index > this.length) {
      return undefined;
    } else {
      const newNode = new Node(value);
      const leftIndex = this.getMethod(index - 1);
      const rightIndex = leftIndex.next;
      leftIndex.next = newNode;
      newNode.prev = leftIndex;
      newNode.next = rightIndex;
      rightIndex.prev = newNode;
      this.length++;
    }
  }
  removeMethod(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;
    const Index = this.getMethod(index);
    Index.prev.next = Index.next;
    Index.next.prev = Index.prev;
    Index.prev = null;
    Index.next = null;
    this.length--;
  }
}

const firstNode = new DoubleLinkedList(0);
firstNode.pushMethod(1);
firstNode.unShift(2);
firstNode.setMethod(1, 100);
console.log(firstNode);

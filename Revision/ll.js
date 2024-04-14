class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  pushMethod(value) {
    const pushNode = new Node(value);
    if (!this.head) {
      this.head = pushNode;
      this.tail = pushNode;
    } else {
      this.tail.next = pushNode;
      this.tail = pushNode;
    }
    this.length++;
  }
  unShiftMethod(value) {
    const unShift = new Node(value);
    if (!this.head) {
      this.head = unShift;
      this.tail = unShift;
    } else {
      unShift.next = this.head;
      this.head = unShift;
    }
    this.length++;
  }
  popMethod() {
    if (!this.head) return undefined;
    let next = this.head;
    let pre = this.head;
    while (next.next) {
      pre = next;
      next = next.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  shift() {
    if (!this.head) return undefined;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  getMethod(index) {
    if (index <= -1 || index > this.length)
      throw new Error(`Idiot Check The Length`);
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  setMethod(index, value) {
    const getIndex = this.get(index);
    if (getIndex) {
      getIndex.value = value;
    } else {
      return undefined;
    }
  }
  insertMethod(index, value) {
    const insertNode = new Node(value);
    if (index === 0) this.unShiftMethod(value);
    if (index === this.length) this.pushMethod(value);
    if (index < 0 || index > this.length) return undefined; //  2-3-4-5
    else {
      const getIndex = this.getMethod(index - 1);
      const nextIndex = getIndex.next;
      insertNode.next = nextIndex;
      getIndex.next = insertNode;
      this.length++;
    }
  }
  removeMethod(index) {
    if (index === 0) this.unShiftMethod();
    if (index === this.length) this.popMethod();
    if (index <= -10 || index > this.length) return undefined;
    const getIndex = this.getMethod(index - 1);
    const getNext = getIndex.next;
    getIndex.next = getNext.next;
    this.length--;
  }

  // To find the middle node in a linked list using JavaScript, you can use the slow and fast pointer technique. This technique involves iterating through the list with two pointers: one that moves one node at a time (slow pointer) and another that moves two nodes at a time (fast pointer). When the fast pointer reaches the end of the list, the slow pointer will be pointing to the middle node. Here's how you can implement it:

  findMiddleNode() {
    if (!this.head) return undefined;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

const firstNode = new LinkedList(1);
firstNode.pushMethod(2);
firstNode.pushMethod(3);
firstNode.pushMethod(4);
firstNode.pushMethod(5);
firstNode.pushMethod(6);
// 1-2-3-4-5-6-7-8-9-10
// 1 - 1
// 2 - 3
// 3 - 5
// 4 - 7
// 5 - 9
// firstNode.popMethod();
// firstNode.shift();
// firstNode.get(2);
// firstNode.set(2, 100);
// firstNode.insertMethod(0, 100);
// firstNode.removeMethod(1);
console.log(firstNode.findMiddleNode());

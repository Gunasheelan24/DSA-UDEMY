class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkList {
  constructor(value) {
    const createdNode = new Node(value);
    this.head = createdNode;
    this.tail = createdNode;
    this.length = 1;
  }
  // Push Method
  push(value) {
    //Base Case 1.what if the linkedlist is empty
    const createdNode = new Node(value);
    if (!this.head) {
      this.head = createdNode;
      this.tail = this.head;
    } else {
      this.tail.next = createdNode;
      this.tail = createdNode;
    }
    this.length++;
  }
  //Pop Method
  //Base Case 1) What Happen When User Do A Pop when the linked list is empty
  //          2) What Happen When The Linkedlist have only one node
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      let pre = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
  }
  unShift(value) {
    // This Method Going To Add A Node In The Beggining
    // Base Case One) What Suppose If The Head Is null
    const unShiftNode = new Node(value);
    if (!this.head) {
      this.head = unShiftNode;
      this.tail = unShiftNode;
    } else {
      let temp = this.head;
      this.head = unShiftNode;
      this.head.next = temp;
    }
    this.length++;
  }
  shift() {
    // Remove The Node in The Beginning Of The Linked List
    // Base Case One) Write a Logic To Check If The Head Is Empty Then Return undefined
    // Base Case Two) Write a Logic To Remove Then Node if The Linked List Having Only One Node
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head.next;
      this.head = temp;
      this.length--;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  get(index) {
    if (index <= -1 || index > this.length) {
      return undefined;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }
  set(index, value) {
    const getIndex = this.get(index);
    if (getIndex) {
      getIndex.value = value;
      return getIndex;
    } else {
      return false;
    }
  }
}

// Creating New Node
const firstNode = new linkList(0);
firstNode.push(1);
firstNode.unShift(-1);
const getValue = firstNode.set(1);
console.log(firstNode);

// Basically Linked List is Data Structure
// Bio O Details
// For Push It's O(1)
// For Pop It's O(N)
// For unshift it's O(1)
// For Shift It's O(1)

// Creating a Class To Create a New Node
class CreateNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new CreateNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }
  push(value) {
    const newNodePush = new CreateNode(value);
    if (!this.head) {
      this.head = newNodePush;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.tail.next = newNodePush;
      this.tail = newNodePush;
      this.length++;
    }
  }
}

const newNode = new LinkedList(0);
newNode.push(1);
console.log(newNode);

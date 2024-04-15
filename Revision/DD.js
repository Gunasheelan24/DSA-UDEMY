class NodeDoubleList {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newDoubleList = new NodeDoubleList(value);
    this.head = newDoubleList;
    this.tail = this.head;
    this.length = 1;
  }
  pushMethod(value) {
    const newNode = new NodeDoubleList(value);
    if (!this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  unShiftMethod(value) {
    const newNode = new NodeDoubleList(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  popMethod() {
    if (this.length === 0) {
      throw new Error(`Undefined`);
    } else {
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
    }
  }

  shiftMethod() {
    if (!this.head) throw new Error("There Is No Index There");
    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  getMethod(index) {
    if (!this.head) return undefined;
    if (index < 0 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  setMethod(index, value) {
    const setValue = this.getMethod(index);
    if (setValue) {
      setValue.value = value;
      return setValue;
    } else {
      throw new Error(setValue);
    }
  }
  insertValue(index, value) {
    if (!this.head) return undefined;
    if (index === 0) return this.unShiftMethod(value);
    if (index === this.length) return this.pushMethod(value);
    if (index < 0 || index > this.length) return undefined;
    const newNode = new NodeDoubleList(value);
    const getIndex = this.getMethod(index); //  0-1-2- -3-4
    getIndex.prev.next = newNode;
    newNode.next = getIndex.next;
    getIndex.prev = newNode;
    this.length++;
    return this;
  }
}

const firstNode = new DoublyLinkedList(1);
firstNode.pushMethod(2);
firstNode.unShiftMethod(0);
firstNode.insertValue(1, 1000);
// firstNode.popMethod();
// firstNode.shiftMethod();
// firstNode.getMethod(0);
// firstNode.setMethod(0, -1);
console.log(firstNode);

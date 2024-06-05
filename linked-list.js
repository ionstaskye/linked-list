/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    
    if (this.head === null) this.head = newNode

    if (this.tail === null)  this.tail = newNode
    this.length += 1
    this.tail = newNode
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    
    if (this.head === null) this.head = newNode

    if (this.tail === null)  this.tail = newNode
    this.length += 1
    this.head = newNode

  }

  /** pop(): return & remove last item. */

  pop() {
    currentNode= this.head
    for (i=0; i < this.length; i++){
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = null
    this.tail = previousNode
    this.length -=1
    return currentNode
  }

  /** shift(): return & remove first item. */

  shift() {
    firstValue = this.head

    this.head = this.head.next
    this.length -= 1

    return firstValue
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    currentValue = this.head
    for (x=0; x<idx; x++){
      currentValue = currentValue.next
    }
    return currentValue
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    currentValue = this.head
    for (x=0; x<idx; x++){
      currentValue = currentValue.next
    }
    currentValue.val  = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    newNode = new Node(val)
    currentNode= this.head
    for (i=0; i < idx; i++){
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = newNode
    newNode.next = currentNode
    this.length += 1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    currentNode= this.head
    for (i=0; i < idx; i++){
      previousNode = currentNode
      currentNode = currentNode.next
    }
    previousNode.next = currentNode.next
    this.length -=1
    return currentNode
  }

  /** average(): return an average of all values in the list */

  average() {
    sum = 0
    currentNode = this.head
    for (i=0; i < this.length; i++){
      sum += currentNode.val
      currentNode = currentNode.next
    
  }
  average = sum / this.length
  return average
}

module.exports = LinkedList;

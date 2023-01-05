//Data Algorithms
//What is Big O notation
//Big o notation is where you measure the time complexity of a function
// a few tricks,
//if the function has a variable then it is O(1)
//if the function has 1 for loop then it is O(n)
//if the function has two for loops then it it is O(n^2)

//Space complexity is measured with the way variables are measured
//Variables
//Data structures
//function calls
//locations

//these things take space
//a regular for loop is O(1) but if you're adding more than one element like an array and pushing eleemnts to it you're looking at O(n)

//Frequency Pattern
//Write a function called same which accepts two arrays. The function should return true
//if every value in the array has it's corresponding value squared in the second array.The frequency of values must be the same

//Naive solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//frequency counter pattern
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let first = {};
  let second = {};

  for (let val of arr1) {
    first[val] = (first[val] || 0) + 1;
  }

  for (let val of arr2) {
    second[val] = (second[val] || 0) + 1;
  }

  for (let key in first) {
    if (!(key ** 2 in second)) {
      return false;
    }
    if (first[key ** 2] !== second[key]) {
      return false;
    }
  }
  return true;
}

//Singlelinked list
class Nodevalue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.h = null;
    this.t = null;
    this.l = 0;
  }

  pushing(value) {
    //push is complete
    let newnode = new Nodevalue(value);
    if (!this.h) {
      this.h = newnode;
      this.t = this.h;
    } else {
      this.t.next = newnode;
      this.t = newnode;
    }
    this.l++;
    return this;
  }

  poping() {
    //pop is complete
    if (!this.h) return null;
    let curr = this.h;
    let tailvalue = curr;
    while (curr.next) {
      tailvalue = curr;
      curr = curr.next;
    }
    this.t = tailvalue;
    this.t.next = null;
    this.l--;
    if (this.l === 0) {
      this.h = null;
      this.t = null;
    }
    return this;
  }

  shifting() {
    //shift is complete
    if (!this.h) return null;
    let curr = this.h;
    this.h = curr.next;
    this.l--;
    if (this.l === 0) {
      this.h = null;
      this.t = null;
    }
    return this;
  }

  unshifting(value) {
    //unshift is complete
    let newnode = new Nodevalue(value);
    if (!this.h) {
      this.h = newnode;
      this.t = this.h;
    } else {
      newnode.next = this.h;
      this.h = newnode;
    }
    this.l++;
    return this;
  }

  getting(dex) {
    //get is complete
    if (dex < 0 || dex >= this.l) return null;
    let curr = this.h;
    let coun = 0;
    while (coun != dex) {
      curr = curr.next;
      coun++;
    }
    return curr;
  }

  setting(dex, value) {
    let newnode = this.get(dex);
    if (newnode) {
      newnode.value = value;
      return true;
    }
    return false;
  }
}

let val = new SingleLinkedList();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 && index >= this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let newnode = new Node(val);
    let prev = this.get(index - 1);
    let aboveprev = prev.next;
    (prev.next = newnode), (newnode.prev = prev);
    (newnode.next = aboveprev), (aboveprev.prev = newnode);
    this.length++;
    return true;
  }
}

var list = new DoublyLinkedList();

//Doubly Linked Lists
class Nodevalue {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.h = null;
    this.t = null;
    this.l = 0;
  }
  pushing(value) {
    //push is complete with the new variables in place
    let newn = new Nodevalue(value);
    if (!this.h) {
      this.h = newn;
      this.t = this.h;
    } else {
      this.t.next = newn;
      newn.prev = this.t;
      this.t = newn;
    }
    this.l++;
    return this;
  }

  poping() {
    //pop is complete with the new variables in place
    if (!this.h) return null;
    let curr = this.t;
    if (this.l === 1) {
      this.h = null;
      this.t = null;
    } else {
      this.t = curr.prev; //this.tail = current.prev
      curr.next = null;
      this.t.next = null;
    }
    this.l--;
    return this;
  }

  shifting() {
    //shift is complete with the new variables in place
    if (!this.h) return null;
    let curr = this.h;
    if (this.l === 1) {
      this.h = null;
      this.t = null;
    } else {
      this.h = curr.next; //this.tail = current.prev
      curr.prev = null;
      this.h.prev = null;
    }
    this.l--;
    return this;
  }

  unshifting(value) {
    let newn = new Nodevalue(value);
    if (!this.h) {
      this.h = newn;
      this.t = this.h;
    } else {
      newn.next = this.h;
      this.h = newn;
      this.h.prev = newn;
    }
    this.l++;
    return newn; //this can be return this
  }

  getting(dex) {
    if (dex < 0 || dex >= this.l) return null;
    let countvalue, curr;
    if (dex <= this.l / 2) {
      let countvalue = 0;
      let curr = this.h;
      while (countvalue != dex) {
        curr = curr.next;
        countvalue++;
      }
      return curr;
    } else {
      let countvalue = 0;
      let curr = this.h;
      while (countvalue != dex) {
        curr = curr.next;
        countvalue++;
      }
    }
    return curr;
  }

  setting(dex, value) {
    let newvalue = this.getting(value);
    if (newvalue) {
      newvalue.value = value;
      return true;
    }
    return false;
  }

  add(dex, val) {
    if (dex < 0 || dex >= this.l) return false;
    if (dex === 0) return this.unshifting(val);
    if (dex === this.l) return this.pushing(val);
    let newnode = new Nodevalue(val);
    let previous = this.get(dex - 1);
    let aboveprevious = previous.next;
    (previous.next = newnode), (newnode.prev = newnode);
    (newnode.next = aboveprevious), (aboveprevious.prev = newnode);
    this.l++;
    return true;
  }
}

let val = new DoubleLinkedList();

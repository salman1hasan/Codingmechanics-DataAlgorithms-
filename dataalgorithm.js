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

  push(value) {
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

  pop() {
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

  shift() {
    //shift is complete
    if (!this.h) return null;
    let curr = this.h;
    this.h = curr.next;
    if (this.l === 0) {
      this.h = null;
      this.t = null;
    }
    this.l--;
    return this;
  }

  unshift(value) {
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

  get(dex) {
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

  set(dex, value) {
    let newnode = this.get(dex);
    if (newnode) {
      newnode.value = value;
      return true;
    }
    return false;
  }
}

let val = new SingleLinkedList();

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
}

let val = new DoubleLinkedList();

const Node = require('./node');

class LinkedList {
    constructor() {
      this.length = 0;
    //  this.head = null;
    //  this.tail = null;
    }

    append(data) {
      var node = new Node(data);
      if (this.length) {
        this.tail.next = node.data;
        node.prev = this.tail();
        this.tail();
      } else {
        this._head = node;
        this._tail = node;
      }
      this.length++;
      return node;
    }

    head() {
      this.head.data = node;
    }

    tail() {
      this.tail.data = node;
    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;

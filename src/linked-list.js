const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
 
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        
        return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
        var currentNode = this._head,
            count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode.data;
    }

    insertAt(index, data) {
        
        var currentNode = this._head,
            count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        
        currentNode.data = data;
        
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        var node = new Node(null);
        this.length = 0;
        this._head = node;
        this._tail = node;
        return this;
    }

    deleteAt(index) {
        if (index < this.length) {

            var currentNode = this._head;
            var i = 0;
            while (i < index) {
                currentNode = currentNode.next;
                i++;
            }
            while (i != this.length - 1) {
                currentNode.data = currentNode.next.data;
                this._tail = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            currentNode.data = null;
            currentNode.next = null;
            this.length--;
            return this;
        } else {
            return -1;
        }
    }

    reverse() {
       
       var tempNode = {
            data: null,
            next: null,
            prev: null,
        }

        var headNode = this._head;
        var tailNode = this._tail;

        var i = 0;

        while (i < Math.floor(this.length / 2)) { 
            tempNode.data = tailNode.data;
            tailNode.data = headNode.data;
            headNode.data = tempNode.data;
            headNode = headNode.next;
            tailNode = tailNode.prev;
            i++;
        }
        
        return this;
    }

    indexOf(data) {
        var currentNode = this._head;
        var i = 0;
        while (i != this.length) {
            if (currentNode.data == data) {
                return i;
            }
            currentNode = currentNode.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;

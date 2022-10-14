const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 */

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink( value ) {
    value === undefined ? this.arr.push('( )~~') : this.arr.push(`( ${value} )~~`);
    return this;
  },
  removeLink( position ) {
    if ( position > this.arr.length - 1 || position <= 0 || isNaN(position) || !Number.isInteger(position) ) {
      this.arr = [];
      throw new Error ("You can't remove incorrect link!");
    }
    this.arr.splice( position - 1, 1 );
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let e = this.arr[this.arr.length - 1].slice(0, this.arr[this.arr.length - 1].length - 2);
    this.arr.pop();
    this.arr.push(e);
    let str = this.arr.join('');
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
